const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {
    app: "./src/index",
  },
  mode: "development",
  devServer: {
    port: 7002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:7002/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mf2",
      library: { type: "umd", name: "mf2" },
      filename: "remoteEntry.js",
      remoteType: "script",
      exposes: {
        "./Mf2": "./src/components/ModernReactComponent",
      },
      remotes: {
        mf3: "mf3@http://localhost:7003/remoteEntry.js",
      },
      shared: {
        react: {
          requiredVersion: "17.0.2",
          // shareScope: "react@17.0.2",
        },
        "react-dom": {
          requiredVersion: "17.0.2",
          // shareScope: "react@17.0.2",
        },
        // "react-router-dom": {
        //   requiredVersion: "17.0.2",
        //   // shareScope: "react@17.0.2",
        // },
      },
      // dts: false,
      // runtimePlugins: [require.resolve("./react-adapter-runtime-plugin.js")],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
