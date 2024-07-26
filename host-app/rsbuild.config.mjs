import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  server: {
    port: 3000,
  },
  tools: {
    rspack: {
      devServer: {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        historyApiFallback: true,
        hot: false,
        watchContentBase: false,
        liveReload: false,
      },
    },
  },
  moduleFederation: {
    options: {
      name: "host",
      shared: {
        react: { requiredVersion: false },
        "react-dom": {
          requiredVersion: false,
        },
      },
    },
  },
  dev: {
    hmr: false,
    liveReload: false,
  },
  plugins: [pluginReact(), pluginSass()],
});
