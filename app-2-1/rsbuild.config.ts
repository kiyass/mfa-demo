import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";
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
        publicPath: "http://localhost:8021/",
      },
      plugins: [
        new ModuleFederationPlugin({
          name: "main",
          remotes: {
            mf1: "mf1@http://localhost:7001/remoteEntry.js",
            mf2: "mf2@http://localhost:7002/mf-manifest.json",
          },
          runtimePlugins: [
            require.resolve("./react-adapter-runtime-plugin.ts"),
          ],
          shared: {
            react: { requiredVersion: false },
            "react-dom": {
              requiredVersion: false,
            },
          },
        }),
      ],
      experiments: {
        topLevelAwait: true,
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
  plugins: [pluginReact(), pluginStyledComponents(), pluginSass()],
});
