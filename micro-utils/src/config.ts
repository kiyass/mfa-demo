import type { Rspack } from '@rsbuild/core';
import {
  RsbuildConfig,
  defineConfig as define,
  mergeRsbuildConfig,
} from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { parse } from 'semver';
import { externals } from './externals';

function getMajorVersion(versionRange: string) {
  // 获取主要版本号
  const majorVersion = parse(versionRange.replace(/^[^0-9]+/, ''))?.major;
  return majorVersion;
}

interface Config extends RsbuildConfig {
  packageJson: {
    name: string;
    dependencies: {
      [key: string]: string;
    };
  };
}

export function defineConfig({ packageJson, ...config }: Config) {
  const { name, dependencies } = packageJson;
  let tags: any[] | undefined = [];
  let newExternals: {
    [key: string]: string;
  } = {};
  for (const key in externals) {
    if (dependencies[key]) {
      const majorVersion = getMajorVersion(dependencies[key]);
      let src = undefined;
      if (['react', 'react-dom'].includes(key)) {
        src = `https://unpkg.com/${key}@${majorVersion}/umd/${key}.development.js`;
      } else if (['axios'].includes(key)) {
        src = `https://unpkg.com/${key}@${majorVersion}/dist/${key}.js`;
      } else {
        src = `https://unpkg.com/${key}@${majorVersion}/${key}.js`;
      }

      tags.push({
        tag: 'script',
        attrs: {
          defer: true,
          crossorigin: 'anonymous',
          src,
        },
        head: true,
        append: false,
        global: true,
      });
      newExternals[key] = externals[key];
    }
  }
  let mfConfig = undefined;
  if (config.moduleFederation?.options?.name) {
    mfConfig = {
      options: {
        name: config.moduleFederation.options.name,
        // runtimePlugins: [require.resolve('./runtime-plugin.js')],
      },
    };
  }

  return mergeRsbuildConfig(
    define(config),
    define({
      moduleFederation: mfConfig,
      html: {
        tags: [
          {
            tag: 'script',
            head: true,
            children:
              'if(window.parent !== window && window.__MICRO_APP_ENVIRONMENT__) {window.stop()}',
          },
        ],
      },
      // output: {
      //   externals: newExternals,
      // },
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
        },
      },
      dev: {
        hmr: false,
        liveReload: false,
      },
      plugins: [pluginReact(), pluginSass()],
    }),
  );
}

interface ModuleFederationPluginOptions
  extends Rspack.ModuleFederationPluginOptions {
  dts: boolean;
}
export type { ModuleFederationPluginOptions };
