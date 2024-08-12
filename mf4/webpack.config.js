const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {
    app: "./src/index",
  },
  mode: "development",
  devServer: {
    port: 7004,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:7004/",
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
      name: "mf4",
      library: { type: "umd", name: "mf4" },
      filename: "remoteEntry.js",
      remoteType: "script",
      exposes: {
        "./Mf4": "./src/components/ModernReactComponent",
      },
      remotes: {
        mf3: "mf3@http://localhost:7003/remoteEntry.js",
      },
      shared: {
        react: {
          requiredVersion: "18.3.1",
          // shareScope: "react@18.3.1",
        },
        "react-dom": {
          requiredVersion: "18.3.1",
          // shareScope: "react@18.3.1",
        },
        // "react-router-dom": {
        //   requiredVersion: false,
        //   shareScope: "react-18.3.1",
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
