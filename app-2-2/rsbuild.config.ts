import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";
import { mfConfig } from "./moduleFederation.config";
import defineConfig from "./src/lib/config";

const packageJson = require("./package.json");

export default defineConfig({
  packageJson,
  server: {
    port: 8022,
    host: "localhost",
  },
  dev: {
    assetPrefix: "http://localhost:8022/",
  },
  moduleFederation: {
    options: mfConfig,
  },
  plugins: [pluginStyledComponents()],
});
