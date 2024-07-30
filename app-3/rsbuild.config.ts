import { mfConfig } from "./moduleFederation.config";
import defineConfig from "./src/lib/config";
const packageJson = require("./package.json");

export default defineConfig({
  packageJson,
  server: {
    port: 3003,
  },
  dev: {
    assetPrefix: "http://localhost:3003/",
  },
  moduleFederation: {
    options: mfConfig,
  },
});
