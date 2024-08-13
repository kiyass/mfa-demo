import {
  defineConfig as define,
  RsbuildConfig,
  mergeRsbuildConfig,
} from '@rsbuild/core';
import type { Rspack } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { externals } from './externals';
import getUrl from './getUrl';

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
  let newExternals:
    | {
        [key: string]: string;
      }
    | undefined = {};
  for (const key in externals) {
    if (dependencies[key]) {
      const src = getUrl(key, dependencies[key]);

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
  if (config.moduleFederation?.options?.name) {
    if (config.moduleFederation?.options?.exposes) {
      // 如果当前mf配置作为被消费者，此时不能配置external，如果配置则会拿host的依赖版本
      tags = undefined;
      newExternals = undefined;
    }
  }

  return mergeRsbuildConfig(
    define(config),
    define({
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
