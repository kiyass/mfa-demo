import { RsbuildConfig } from '@rsbuild/core';
import { CopyRspackPlugin } from '@rspack/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { externals } from './externals';
import { getUrl, getMajorVersion } from './utils';
const { resolve } = require('path');

export function getDefaultConfig(
  config: RsbuildConfig,
  packageJson: Record<string, any>,
) {
  const { name, dependencies } = packageJson;
  let newExternals: Record<string, string> | undefined = {};

  for (const key in externals) {
    if (dependencies[key]) {
      newExternals[key] = getUrl(key, dependencies[key]);
    }
  }

  let mfConfig = undefined;
  if (config.moduleFederation?.options?.name) {
    // 如果当前mf配置作为被消费者，此时需要走runtime cdn的逻辑，因为此时不能配置external，如果配置则会拿host的依赖版本
    newExternals = undefined;
    const runtimePlugins = [
      require.resolve('./runtime-scope.js'),
      require.resolve('./runtime-cdn.js'),
    ];

    mfConfig = {
      options: {
        name: config.moduleFederation.options.name,
        runtimePlugins,
      },
    };
  }

  const defaultConfig: RsbuildConfig = {
    // moduleFederation: mfConfig,
    // html: {
    //   scriptLoading: 'module',
    // },
    // output: {
    //   externals: newExternals,
    // },
    html: {
      tags: [
        {
          tag: 'script',
          attrs: { src: './libs/react.production.min.js', exclude: true },
          head: true,
          publicPath: true,
        },
        {
          tag: 'script',
          attrs: { src: './libs/react-dom.production.min.js', exclude: true },
          head: true,
          publicPath: true,
        },
        {
          tag: 'script',
          children: [
            'window.__app_require_version__={};',
            `window.__app_require_version__.react='${getMajorVersion(
              dependencies.react,
            )}';`,
            `window.__app_require_version__['react-dom']='${getMajorVersion(
              dependencies['react-dom'],
            )}';`,
          ].join('\n'),
          head: true,
          publicPath: true,
        },
      ],
    },
    output: {
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    server: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    tools: {
      rspack: {
        // experiments: {
        //   outputModule: true,
        // },
        output: {
          globalObject: 'window',
          chunkLoadingGlobal: `webpackJsonp_${name}`,
        },
        plugins: [
          new CopyRspackPlugin({
            patterns: [
              {
                from: resolve(
                  './node_modules/react/umd/react.production.min.js',
                ),
                to: resolve('./dist/libs/react.production.min.js'),
              },
              {
                from: resolve(
                  './node_modules/react-dom/umd/react-dom.production.min.js',
                ),
                to: resolve('./dist/libs/react-dom.production.min.js'),
              },
            ],
          }),
        ],
      },
    },
    dev: {
      hmr: false,
      liveReload: false,
    },
    plugins: [pluginReact(), pluginSass()],
  };

  return defaultConfig;
}
