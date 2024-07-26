import type { ModuleFederationPluginOptions } from "./src/lib/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "main",
  remotes: {
    mf1: "mf1@http://localhost:7001/remoteEntry.js",
    mf2: "mf2@http://localhost:7002/remoteEntry.js",
    appx: "appx@http://localhost:8021/remoteEntry.js",
    mf3: "mf3@http://localhost:7003/remoteEntry.js",
  },
  shared: {
    react: { requiredVersion: false },
    "react-dom": {
      requiredVersion: false,
    },
    "react-router-dom": {
      requiredVersion: false,
      shareScope: "17.0.2",
    },
  },
};
