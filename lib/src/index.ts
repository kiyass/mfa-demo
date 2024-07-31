import startMicroApp from './micro-lib/startMicroApp';
import renderMicroApp from './micro-lib/renderMicroApp';
import {
  defineConfig,
  ModuleFederationPluginOptions,
} from './micro-lib/config';

export { startMicroApp, renderMicroApp, defineConfig };

export type { ModuleFederationPluginOptions };
