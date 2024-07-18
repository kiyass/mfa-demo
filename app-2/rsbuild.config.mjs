import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
const packageName = require("./package.json").name;

export default defineConfig({
  html: {
    mountId: "app-2",
  },
  tools: {
    rspack: {
      output: {
        library: `${packageName}-[name]`,
        libraryTarget: "umd",
        chunkLoadingGlobal: `webpackJsonp_${packageName}`,
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
  server: {
    port: 3001,
  },
  dev: {
    hmr: false,
    liveReload: false,
  },
  plugins: [pluginReact()],
});
