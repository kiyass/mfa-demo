import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";

const packageName = require("./package.json").name;

export default defineConfig({
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
        library: `${packageName}`,
        libraryTarget: "umd",
        globalObject: "window",
        chunkLoadingGlobal: `webpackJsonp_${packageName}`,
        publicPath: "http://localhost:8021/",
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
      plugins: [
        new ModuleFederationPlugin({
          name: "appx",
          library: { type: "umd", name: "appx" },
          remoteType: "script",
          filename: "remoteEntry.js",
          remotes: {
            mf1: "mf1@http://localhost:7001/remoteEntry.js",
            mf2: "mf2@http://localhost:7002/mf-manifest.json",
          },
          runtimePlugins: [
            require.resolve("./react-adapter-runtime-plugin.ts"),
          ],
          exposes: {
            "./TestEcharts": "./src/examples/TestEcharts.jsx",
          },
          dts: false,
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
