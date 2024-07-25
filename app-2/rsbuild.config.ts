import defineConfig from "./src/lib/config";
import { mfConfig } from "./moduleFederation.config";
const packageName = require("./package.json").name;

export default defineConfig({
  packageName,
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
