import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";
import { mfConfig } from "./moduleFederation.config";
import defineConfig from "./src/lib/config";

const packageJson = require("./package.json");

export default defineConfig({
  packageJson,
  server: {
    port: 2012,
    host: "localhost",
  },
  dev: {
    assetPrefix: "http://localhost:2012/",
  },
  moduleFederation: {
    options: mfConfig,
  },
  plugins: [pluginStyledComponents()],
});
