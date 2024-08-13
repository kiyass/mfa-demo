const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {
    app: "./src/index",
  },
  mode: "development",
  devServer: {
    port: 7003,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:7003/",
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
      name: "mf3",
      library: { type: "umd", name: "mf3" },
      filename: "remoteEntry.js",
      remoteType: "script",
      exposes: {
        "./utils": "./src/index.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
