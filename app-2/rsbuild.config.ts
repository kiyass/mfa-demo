import defineConfig from "./src/lib/config";
import { mfConfig } from "./moduleFederation.config";
const packageJson = require("./package.json");

export default defineConfig({
  packageJson,
  server: {
    port: 3001,
  },
  dev: {
    assetPrefix: "http://localhost:3001/",
  },
  moduleFederation: {
    options: mfConfig,
  },
});
