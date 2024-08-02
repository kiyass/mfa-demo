import type { ModuleFederationPluginOptions } from "micro-utils/config";

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
      requiredVersion: "^6.24.1",
      shareKey: "17.0.2",
      // shareScope: "17.0.2",
    },
  },
};
