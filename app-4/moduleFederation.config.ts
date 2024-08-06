import type { ModuleFederationPluginOptions } from "micro-utils/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "app4",
  remotes: {
    // mf1: "mf1@http://localhost:7001/remoteEntry.js",
    mf2: "mf2@http://localhost:7002/remoteEntry.js",
    mf3: "mf3@http://localhost:7003/remoteEntry.js",
  },
  shared: {
    react: {
      requiredVersion: false,
      shareScope: "react@17.0.2",
    },
    "react-dom": {
      requiredVersion: false,
      shareScope: "react@17.0.2",
    },
  },
};
