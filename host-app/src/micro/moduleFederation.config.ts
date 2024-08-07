import type { ModuleFederationPluginOptions } from "micro-utils/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "host",
  remotes: {
    mf3: "mf3@http://localhost:7003/remoteEntry.js",
  },
  shared: {
    react: {
      requiredVersion: "17.0.2",
      shareScope: "react@17.0.2",
    },
    "react-dom": {
      requiredVersion: "17.0.2",
      shareScope: "react@17.0.2",
    },
  },
};
