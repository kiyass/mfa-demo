import { RsbuildConfig } from '@rsbuild/core';
import { CopyRspackPlugin } from '@rspack/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { externals } from './externals';
import { getCopyLibs, initTags, getRequirePackages } from './utils';
const { resolve } = require('path');

export function getDefaultConfig(
  config: RsbuildConfig,
  packageJson: Record<string, any>,
) {
  const { name, dependencies } = packageJson;
  let newExternals: Record<string, string> | undefined = {};

  for (const key in externals) {
    if (dependencies[key]) {
      newExternals[key] = externals[key];
    }
  }

  let mfConfig = undefined;
  if (config.moduleFederation?.options?.name) {
    const runtimePlugins = [require.resolve('./runtime-scope.js')];

    mfConfig = {
      options: {
        name: config.moduleFederation.options.name,
        runtimePlugins,
      },
    };
  }

  const defaultConfig: RsbuildConfig = {
    moduleFederation: mfConfig,
    output: {
      externals: newExternals,
    },
    html: {
      tags: [
        ...initTags(newExternals),
        {
          tag: 'script',
          children: `window.__app_require_packages__= ${getRequirePackages(
            newExternals,
            dependencies,
          )};`,
          head: true,
          publicPath: true,
        },
      ],
    },
    server: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    tools: {
      rspack: {
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
