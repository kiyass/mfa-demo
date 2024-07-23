import { defineConfig } from "@rsbuild/core";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

const packageName = require("./package.json").name;
console.log(process.env.NODE_ENV, "kkk");
export default defineConfig({
  server: {
    port: 3001,
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
