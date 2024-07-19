const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {
    app: "./src/index",
  },
  mode: "development",
  devServer: {
    port: 9001,
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:3002/",
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
      name: "mf1",
      library: { type: "umd", name: "app1" },
      remoteType: "script",
      exposes: {
        "./Mf1": "./src/Page",
      },
      shared: { react: { eager: false }, "react-dom": { eager: false } },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
