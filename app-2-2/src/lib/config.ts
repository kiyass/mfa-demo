import type { Rspack } from "@rsbuild/core";
import {
  RsbuildConfig,
  defineConfig as define,
  mergeRsbuildConfig,
} from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

const { tags } = require("./cdn");
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
  console.log(dependencies, "dependencies");
  // let tags = [];
  // for (const key in dependencies) {
  // }

  // let mfConfig = undefined;
  // if (config.moduleFederation?.options?.name) {
  //   mfConfig = {
  //     options: {
  //       name: config.moduleFederation.options.name,
  //       runtimePlugins: [require.resolve("./react-adapter-runtime-plugin.js")],
  //     },
  //   };
  // }
  return mergeRsbuildConfig(
    define(config),
    define({
      // moduleFederation: mfConfig,
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
