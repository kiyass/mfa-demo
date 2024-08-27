import { defineConfig } from "micro-utils/config";
import { mfConfig } from "./moduleFederation.config";

export default defineConfig({
  server: {
    port: 2004,
  },
  moduleFederation: {
    options: mfConfig,
  },
  dev: {
    assetPrefix: "http://localhost:2004/",
  },
  output: {
    assetPrefix: "http://localhost:2004/",
  },
});
