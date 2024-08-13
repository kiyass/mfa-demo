import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";
import { mfConfig } from "./moduleFederation.config";
import { defineConfig } from "micro-utils/config";

const packageJson = require("./package.json");

export default defineConfig({
  packageJson,
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
  plugins: [pluginStyledComponents()],
});
