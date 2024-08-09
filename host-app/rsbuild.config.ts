import { defineConfig } from "micro-utils/config";
const packageJson = require("./package.json");

export default defineConfig({
  packageJson,
  server: {
    port: 3000,
  },
  dev: {
    assetPrefix: "http://localhost:3000/",
  },
});
