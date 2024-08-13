const HtmlWebpackPlugin = require("html-webpack-plugin");
const rspack = require("@rspack/core");
const path = require("path");

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: 7004,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
              },
              transform: {
                react: {
                  runtime: "automatic",
                },
              },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new rspack.container.ModuleFederationPluginV1({
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
        react: { requiredVersion: "18.3.1" },
        "react-dom": {
          requiredVersion: "18.3.1",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = webpackConfig;
