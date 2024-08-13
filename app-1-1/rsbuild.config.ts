import { defineConfig } from "micro-utils/config";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import { mfConfig } from "./moduleFederation.config";
import { pluginStyledComponents } from "@rsbuild/plugin-styled-components";

const packageJson = require("./package.json");

export default defineConfig({
  packageJson,
  server: {
    port: 2011,
    host: "localhost",
  },
  tools: {
    rspack(config, { appendPlugins }) {
      // 仅在 RSDOCTOR 为 true 时注册插件，因为插件会增加构建耗时
      if (process.env.RSDOCTOR) {
        appendPlugins(
          new RsdoctorRspackPlugin({
            // 插件选项
            supports: {
              generateTileGraph: true,
            },
          })
        );
      }
    },
  },
  moduleFederation: {
    options: mfConfig,
  },
  dev: {
    assetPrefix: "http://localhost:2011/",
  },
  plugins: [pluginStyledComponents()],
});
