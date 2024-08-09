import {
  defineConfig as define,
  RsbuildConfig,
  mergeRsbuildConfig,
} from '@rsbuild/core';
import type { Rspack } from '@rsbuild/core';
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
  // if (packageJson?.name === 'host-app') {
  tags.push({
    tag: 'script',
    attrs: {
      defer: true,
      type: 'module',
    },
    children:
      'import React from "react";\n globalThis.React=React;import ReactDOM from "react-dom";\n globalThis.ReactDOM=ReactDOM',
    head: true,
    append: false,
    global: true,
  });
  // }

  let mfConfig = undefined;
  if (config.moduleFederation?.options?.name) {
    const runtimePlugins = [require.resolve('./runtime-scope.js')];

    if (config.moduleFederation?.options?.exposes) {
      // 如果当前mf配置作为被消费者，此时需要走runtime cdn的逻辑，因为此时不能配置external，如果配置则会拿host的依赖版本
      tags = undefined;
      newExternals = undefined;
      runtimePlugins.push(require.resolve('./runtime-cdn.js'));
    }

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
