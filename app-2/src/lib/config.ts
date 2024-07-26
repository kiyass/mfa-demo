import {
  defineConfig as define,
  RsbuildConfig,
  mergeRsbuildConfig,
} from "@rsbuild/core";
import type { Rspack } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
const semver = require("semver");

function getMajorVersion(versionRange: string) {
  // 获取主要版本号
  const majorVersion = semver.parse(versionRange.replace(/^[^0-9]+/, "")).major;
  return majorVersion;
}

const { externals } = require("./externals");
interface Config extends RsbuildConfig {
  packageJson: {
    name: "string";
    dependencies: {
      [key: string]: string;
    };
  };
}

export default function defineConfig({ packageJson, ...config }: Config) {
  const { name, dependencies } = packageJson;
  let tags = [];
  let newExternals: {
    [key: string]: string;
  } = {};
  for (const key in externals) {
    if (dependencies[key]) {
      const majorVersion = getMajorVersion(dependencies[key]);
      let src = undefined;
      if (["react", "react-dom"].includes(key)) {
        src = `https://unpkg.com/${key}@${majorVersion}/umd/${key}.development.js`;
      } else if (["axios"].includes(key)) {
        src = `https://unpkg.com/${key}@${majorVersion}/dist/${key}.js`;
      } else {
        src = `https://unpkg.com/${key}@${majorVersion}/${key}.js`;
      }

      tags.push({
        tag: "script",
        attrs: {
          defer: true,
          crossorigin: "anonymous",
          src,
        },
        head: true,
        append: false,
      });
      newExternals[key] = externals[key];
    }
  }

  let mfConfig = undefined;
  if (config.moduleFederation?.options?.name) {
    mfConfig = {
      options: {
        name: config.moduleFederation.options.name,
        runtimePlugins: [require.resolve("./react-adapter-runtime-plugin.js")],
      },
    };
  }
  return mergeRsbuildConfig(
    define(config),
    define({
      moduleFederation: mfConfig,
      html: {
        tags,
      },
      output: {
        externals,
      },
      tools: {
        rspack: {
          output: {
            library: `${name}-[name]`,
            libraryTarget: "umd",
            globalObject: "window",
            chunkLoadingGlobal: `webpackJsonp_${name}`,
          },
          devServer: {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
            historyApiFallback: true,
            watchContentBase: false,
          },
        },
      },
      dev: {
        hmr: false,
        liveReload: false,
      },
      plugins: [pluginReact(), pluginSass()],
    })
  );
}

interface ModuleFederationPluginOptions
  extends Rspack.ModuleFederationPluginOptions {
  dts: boolean;
}
export type { ModuleFederationPluginOptions };
