import { getGlobalVariables } from '../utils';
const { resolve } = require('path');
export class LibraryManager {
  constructor({ dependencies, config }) {
    this.libs = {
      react: {
        from: './node_modules/react/umd/react.production.min.js',
      },
      'react-dom': {
        from: './node_modules/react-dom/umd/react-dom.production.min.js',
      },
      axios: {
        from: './node_modules/axios/dist/axios.min.js',
      },
    };
    this.externals = {};
    this.dependencies = dependencies;
    this.path = config.path;
    this.init(config);
  }

  init({ libs, externals }) {
    let newExternals = {};
    if (libs) {
      this.setLibs(libs);
    }
    for (const key in externals) {
      if (this.dependencies[key] && this.libs[key]) {
        newExternals[key] = externals[key];
      }
    }
    this.externals = newExternals;
  }

  initTags() {
    const result = Object.keys(this.externals).map(item => {
      return {
        tag: 'script',
        attrs: { src: this.getLibSrc(item), exclude: true },
        head: true,
        publicPath: true,
      };
    });
    const globalVariablesScript = this.initGlobalVariables();
    return [...result, globalVariablesScript];
  }

  initGlobalVariables() {
    const children = getGlobalVariables(
      this.externals,
      this.dependencies,
      this.getLibSrc.bind(this),
    );
    return {
      tag: 'script',
      children,
      head: true,
      publicPath: true,
    };
  }

  getCopyPatterns() {
    const result = [];
    Object.keys(this.externals).forEach(item => {
      // Ignore copying when 'from' is not from node_modules
      if (this.libs[item].from.indexOf('node_modules') > -1) {
        result.push({
          from: resolve(this.libs[item].from),
          to: this.getLibTo(item),
        });
      }
    });
    return result;
  }

  getLibFileName(name) {
    return this.libs[name].from.split('/').at(-1);
  }

  getLibTo(name) {
    const fileName = this.getLibFileName(name);
    return resolve(`${this.path}/libs/${fileName}`);
  }

  getLibSrc(name) {
    const fileName = this.getLibFileName(name);
    return `./libs/${fileName}`;
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
