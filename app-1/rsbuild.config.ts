import { defineConfig } from "micro-utils/config";
import { mfConfig } from "./moduleFederation.config";

export default defineConfig({
  server: {
    port: 2001,
  },
  moduleFederation: {
    options: mfConfig,
  },
  dev: {
    assetPrefix: "http://localhost:2001/",
  },
  output: {
    assetPrefix: "http://localhost:2001/",
  },
});
