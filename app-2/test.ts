import { defineConfig as define, mergeRsbuildConfig } from "@rsbuild/core";
import type { Rspack } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

const packageName = require("./package.json").name;
const config2 = define({
  html: {
    tags: [
      {
        tag: "script",
        attrs: {
          defer: true,
          crossorigin: "anonymous",
          src: "https://unpkg.com/react@17/umd/react.development.js",
          ignore: true,
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
          ignore: true,
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
          ignore: true,
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
        publicPath: "http://localhost:3001/",
      },
      devServer: {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        historyApiFallback: true,
        hot: false,
        watchContentBase: false,
        liveReload: false,
      },
    },
  },
  dev: {
    hmr: false,
    liveReload: false,
  },
  plugins: [pluginReact(), pluginSass()],
});

export default function defineConfig(config) {
  return mergeRsbuildConfig(define(config), config2);
}
type MF = Rspack.ModuleFederationPluginOptions;
export { MF };
