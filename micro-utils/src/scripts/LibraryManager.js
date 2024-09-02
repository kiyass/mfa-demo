export class LibraryManager {
  constructor() {
    this.libs = {
      react: {
        from: './node_modules/react/umd/react.production.min.js',
        to: './dist/libs/react.production.min.js', // TOTO get var
        src: './libs/react.production.min.js',
      },
      'react-dom': {
        from: '/node_modules/react-dom/umd/react-dom.production.min.js',
        to: './dist/libs/react-dom.production.min.js',
        src: './libs/react.production.min.js',
      },
      axios: {
        from: '/node_modules/axios/dist/axios.min.js',
        to: './dist/axios.min.js',
        src: './libs/axios.min.js',
      },
    };
  }

  /**
   * 设置库的配置
   * @param {Object} libraries - 库的配置对象
   */
  setLibs(libraries) {
    this.libs = { ...this.libs, ...libraries };
  }

  /**
   * 获取所有库的配置
   * @returns {Object} - 库的配置对象
   */
  getLibs() {
    return this.libs;
  }
}
