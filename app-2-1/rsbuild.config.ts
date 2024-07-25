import defineConfig from "./src/lib/config";
import { mfConfig } from "./moduleFederation.config";
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";

const packageName = require("./package.json").name;

export default defineConfig({
  packageName,
  server: {
    port: 8021,
    host: "localhost",
  },
  dev: {
    assetPrefix: "http://localhost:8021/",
  },
  moduleFederation: {
    options: mfConfig,
  },
  plugins: [pluginStyledComponents()],
});
