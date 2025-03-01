import type { ModuleFederationPluginOptions } from "qiankun-utils/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "main",
  remotes: {
    mf1: "mf1@http://localhost:7001/remoteEntry.js",
    mf2: "mf2@http://localhost:7002/remoteEntry.js",
  },
  shared: {
    react: { requiredVersion: false },
    "react-dom": {
      requiredVersion: false,
    },
    "react-router-dom": {
      requiredVersion: false,
    },
  },
};
