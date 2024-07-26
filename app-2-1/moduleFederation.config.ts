/*
 *  Author:
 *  Description:
 */
import type { ModuleFederationPluginOptions } from "./src/lib/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "appx",
  library: { type: "umd", name: "appx" },
  remoteType: "script",
  filename: "remoteEntry.js",
  remotes: {
    mf1: "mf1@http://localhost:7001/remoteEntry.js",
    mf2: "mf2@http://localhost:7002/remoteEntry.js",
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
