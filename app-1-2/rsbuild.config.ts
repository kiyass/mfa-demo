import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";
import { defineConfig } from "micro-utils/config";
import { mfConfig } from "./moduleFederation.config";

export default defineConfig({
  server: {
    port: 2012,
    host: "localhost",
  },
  moduleFederation: {
    options: mfConfig,
  },
  dev: {
    assetPrefix: "http://localhost:2012/",
  },
  output: {
    assetPrefix: "http://localhost:2012/",
  },
  plugins: [pluginStyledComponents()],
});
