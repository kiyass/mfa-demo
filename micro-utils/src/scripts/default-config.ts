import { RsbuildConfig } from '@rsbuild/core';
import { CopyRspackPlugin } from '@rspack/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { externals } from './externals';
import { getCopyLibs, initTags, getRequirePackages } from './utils';

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
    // 如果当前mf配置作为被消费者，此时需要走runtime cdn的逻辑，因为此时不能配置external，如果配置则会拿host的依赖版本
    // newExternals = undefined;
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
        // experiments: {
        //   outputModule: true,
        // },
        output: {
          globalObject: 'window',
          chunkLoadingGlobal: `webpackJsonp_${name}`,
        },
        plugins: [
          new CopyRspackPlugin({
            patterns: getCopyLibs(newExternals),
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
