import { defineConfig } from "micro-utils/config";
import { mfConfig } from "./moduleFederation.config";
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";

const packageJson = require("./package.json");

export default defineConfig({
  packageJson,
  server: {
    port: 2011,
    host: "localhost",
  },
  dev: {
    assetPrefix: "http://localhost:2011/",
  },
  moduleFederation: {
    options: mfConfig,
  },
  plugins: [pluginStyledComponents()],
});
