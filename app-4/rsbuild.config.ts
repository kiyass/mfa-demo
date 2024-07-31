import { defineConfig } from "micro-utils/config";
import { mfConfig } from "./moduleFederation.config";
const packageJson = require("./package.json");

export default defineConfig({
  packageJson,
  server: {
    port: 2004,
  },
  dev: {
    assetPrefix: "http://localhost:2004/",
  },
  moduleFederation: {
    options: mfConfig,
  },
});
