import { moduleTools, defineConfig } from '@modern-js/module-tools';

export default defineConfig({
  plugins: [moduleTools()],
  buildPreset: 'npm-library',
  buildType: 'bundleless',
  buildConfig: {
    sourceMap: true,
  },
});
