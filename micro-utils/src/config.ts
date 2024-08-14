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
  let imports: {
    [key: string]: string;
  } = {};
  let newExternals:
    | {
        [key: string]: string;
      }
    | undefined = {};
  for (const key in externals) {
    if (dependencies[key]) {
      const src = getUrl(key, dependencies[key]);
      imports[key] = src;
      newExternals[key] = externals[key];
    }
  }

  tags.push({
    tag: 'script',
    attrs: {
      type: 'importmap',
    },
    children: JSON.stringify({
      imports,
    }),
    head: true,
    append: false,
    global: true,
  });
  tags.push({
    tag: 'script',
    attrs: {
      defer: true,
      type: 'module',
    },
    children:
      'import React from "react";\n window.React=React;import ReactDOM from "react-dom";\n window.ReactDOM=ReactDOM',
    head: true,
    append: false,
    global: true,
  });

  let mfConfig = undefined;
  if (config.moduleFederation?.options?.name) {
    // 如果当前mf配置作为被消费者，此时需要走runtime cdn的逻辑，因为此时不能配置external，如果配置则会拿host的依赖版本
    tags = [
      // {
      //   tag: 'script',
      //   children:
      //     'if(window.parent !== window && window.__MICRO_APP_BASE_APPLICATION__) {window.stop()}',
      //   head: true,
      //   append: false,
      //   global: true,
      // },
    ];
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
        tags,
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
