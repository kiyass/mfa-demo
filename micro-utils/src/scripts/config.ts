import type { Rspack } from '@rsbuild/core';
import {
  RsbuildConfig,
  defineConfig as define,
  mergeRsbuildConfig,
} from '@rsbuild/core';
import { getDefaultConfig } from './default-config';
const { resolve } = require('path');

export function defineConfig(config: RsbuildConfig) {
  const packageJson = require(resolve('./package.json'));
  const defaultConfig = getDefaultConfig(config, packageJson);

  return mergeRsbuildConfig(define(config), define(defaultConfig));
}

interface ModuleFederationPluginOptions
  extends Rspack.ModuleFederationPluginOptions {
  dts: boolean;
}
export type { ModuleFederationPluginOptions };
