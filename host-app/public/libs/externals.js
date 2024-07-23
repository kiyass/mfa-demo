// Webpack 打包时，如果使用 CDN 链接引入，则构建时要忽略相关资源
exports.externals = {
  react: "window.React",
  "react-dom": "window.ReactDOM",
};
