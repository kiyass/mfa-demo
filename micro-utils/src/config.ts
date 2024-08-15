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
import getUrl from './getUrl';
function getMajorVersion(versionRange: string) {
  // 获取主要版本号
  const majorVersion = parse(versionRange.replace(/^[^0-9]+/, ''))?.raw;
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
  let newExternals:
    | {
        [key: string]: string;
      }
    | undefined = {};
  let children = '';

  for (const key in externals) {
    if (dependencies[key]) {
      newExternals[key] = getUrl(key, getMajorVersion(dependencies[key]));
      // [
      //   getUrl(key, getMajorVersion(dependencies[key])),
      //   externals[key],
      // ];
      // const moduleName = externals[key];
      // children += `const ${moduleName} = await import("${getUrl(
      //   key,
      //   getMajorVersion(dependencies[key]),
      // )}");\n window.${moduleName} = ${moduleName};`;
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
  return mergeRsbuildConfig(
    define(config),
    define({
      moduleFederation: mfConfig,
      html: {
        scriptLoading: 'module',
      },
      output: {
        externals: newExternals,
      },
      server: {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
      tools: {
        rspack: {
          experiments: {
            outputModule: true,
          },
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
      plugins: [
        pluginReact(),
        pluginSass(),
        // htmlPlugin({
        //   isChangeHtml: !config.moduleFederation?.options?.name,
        //   children,
        // }),
      ],
    }),
  );
}

interface ModuleFederationPluginOptions
  extends Rspack.ModuleFederationPluginOptions {
  dts: boolean;
}
export type { ModuleFederationPluginOptions };
