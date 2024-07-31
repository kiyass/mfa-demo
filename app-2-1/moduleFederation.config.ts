/*
 *  Author:
 *  Description:
 */
import type { ModuleFederationPluginOptions } from "qiankun-utils/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "appx",
  library: { type: "umd", name: "appx" },
  remoteType: "script",
  filename: "remoteEntry.js",
  remotes: {
    mf3: "mf3@http://localhost:7003/remoteEntry.js",
  },
  exposes: {
    "./TestEcharts": "./src/examples/TestEcharts.jsx",
  },
  dts: false,
  shared: {
    react: { requiredVersion: false },
    "react-dom": {
      requiredVersion: false,
    },
  },
};
