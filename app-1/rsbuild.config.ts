import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  server: {
    port: 2001,
    host: "localhost",
  },
  plugins: [pluginReact()],
});
