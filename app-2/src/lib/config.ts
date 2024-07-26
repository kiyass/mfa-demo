import {
  defineConfig as define,
  RsbuildConfig,
  mergeRsbuildConfig,
} from "@rsbuild/core";
import type { Rspack } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

interface Config extends RsbuildConfig {
  packageName: string;
}
export default function defineConfig({ packageName, ...config }: Config) {
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
        tags: [
          {
            tag: "script",
            attrs: {
              defer: true,
              crossorigin: "anonymous",
              src: "https://unpkg.com/react@17/umd/react.development.js",
            },
            head: true,
            append: false,
          },
          {
            tag: "script",
            attrs: {
              defer: true,
              crossorigin: "anonymous",
              src: "https://unpkg.com/react-dom@17/umd/react-dom.development.js",
            },
            head: true,
            append: false,
          },
          {
            tag: "script",
            attrs: {
              defer: true,
              crossorigin: "anonymous",
              src: "https://unpkg.com/babel-standalone@6/babel.min.js",
            },
            head: true,
            append: false,
          },
        ],
      },
      output: {
        externals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      tools: {
        rspack: {
          output: {
            library: `${packageName}-[name]`,
            libraryTarget: "umd",
            globalObject: "window",
            chunkLoadingGlobal: `webpackJsonp_${packageName}`,
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
  dts?: boolean;
}
export type { ModuleFederationPluginOptions };
