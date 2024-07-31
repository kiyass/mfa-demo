import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  server: {
    port: 3000,
  },
  dev: {
    assetPrefix: "http://localhost:3000/",
    hmr: false,
    liveReload: false,
  },
  plugins: [pluginReact(), pluginSass()],
});
