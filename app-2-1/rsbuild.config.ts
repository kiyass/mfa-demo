import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { dependencies } from "./package.json";

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
      plugins: [
        new ModuleFederationPlugin({
          name: "main",
          remotes: {
            mf1: "mf1@http://localhost:7001/remoteEntry.js",
            mf2: "mf2@http://localhost:7002/mf-manifest.json",
          },
          shared: {
            react: {
              requiredVersion: dependencies["react"],
            },
            "react-dom": {
              requiredVersion: dependencies["react-dom"],
            },
          },
        }),
      ],
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
  plugins: [pluginReact(), pluginStyledComponents(), pluginSass()],
});
