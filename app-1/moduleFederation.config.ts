import type { ModuleFederationPluginOptions } from "micro-utils/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "app1",
  remotes: {
    // mf1: "mf1@http://localhost:7001/remoteEntry.js",
    // mf2: "mf2@http://localhost:7002/remoteEntry.js",
    mf3: "mf3@http://localhost:7003/remoteEntry.js",
  },
  shared: {
    react: {
      requiredVersion: "17.0.1",
      shareScope: "react@17.0.1",
    },
    "react-dom": {
      requiredVersion: "17.0.1",
      shareScope: "react@17.0.1",
    },
    "react-router-dom": {
      requiredVersion: "6.24.1",
      shareScope: "react@17.0.1",
    },
  },
};
