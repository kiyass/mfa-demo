import { RsbuildConfig } from '@rsbuild/core';
import { CopyRspackPlugin } from '@rspack/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { externals } from './externals';
import { LibraryManager } from './LibraryManager';

export function getDefaultConfig(
  config: RsbuildConfig,
  packageJson: Record<string, any>,
) {
  const { name, dependencies } = packageJson;

  const libraryManager = new LibraryManager({
    dependencies,
    config: {
      path: './dist',
      libs: {},
      externals: config.output?.externals || externals,
    },
  });

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
      externals: libraryManager.externals,
    },
    html: {
      tags: [...libraryManager.initTags()],
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
            patterns: [...libraryManager.getCopyPatterns()],
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
