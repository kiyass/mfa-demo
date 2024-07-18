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
    },
  },
  server: {
    port: 8021,
    host: "localhost",
  },
  plugins: [pluginReact()],
});
