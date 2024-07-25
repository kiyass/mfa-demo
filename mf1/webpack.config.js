const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {
    app: "./src/index",
  },
  mode: "development",
  devServer: {
    port: 7001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:7001/",
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
      library: { type: "umd", name: "mf1" },
      remoteType: "script",
      filename: "remoteEntry.js",
      remotes: {
        mf2: "mf2@http://localhost:7002/remoteEntry.js",
        mf3: "mf3@http://localhost:7003/remoteEntry.js",
      },
      exposes: {
        "./Mf1": "./src/Page",
      },
      shared: {
        react: { requiredVersion: "17.0.2" },
        "react-dom": {
          requiredVersion: false,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
