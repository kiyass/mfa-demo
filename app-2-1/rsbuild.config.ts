import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
const packageName = require("./package.json").name;

export default defineConfig({
  html: {
    mountId: "app-2-1",
  },
  tools: {
    rspack: {
      output: {
        library: `${packageName}-[name]`,
        libraryTarget: "umd",
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
