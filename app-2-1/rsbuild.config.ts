import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
const packageName = require("./package.json").name;

export default defineConfig({
  tools: {
    rspack: {
      output: {
        library: `${packageName}`,
        libraryTarget: "umd",
        globalObject: "window",
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
    port: 8021,
    host: "localhost",
  },
  dev: {
    hmr: false,
    liveReload: false,
  },
  plugins: [pluginReact()],
});
