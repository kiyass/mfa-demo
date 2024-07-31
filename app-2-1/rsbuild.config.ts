import defineConfig from "qiankun-utils/config";
import { mfConfig } from "./moduleFederation.config";
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";

const packageJson = require("./package.json");

export default defineConfig({
  packageJson,
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
