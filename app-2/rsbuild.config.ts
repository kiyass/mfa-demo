import defineConfig from "./test";
import { mfConfig } from "./moduleFederation.config";

export default defineConfig({
  server: {
    port: 3001,
  },
  moduleFederation: {
    options: mfConfig,
  },
});
