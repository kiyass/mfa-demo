import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  server: {
    port: 8021,
    host: "localhost",
  },
  plugins: [pluginReact()],
});
