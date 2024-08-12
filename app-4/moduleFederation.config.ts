import type { ModuleFederationPluginOptions } from "micro-utils/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "app4",
  remotes: {
    mf3: "mf3@http://localhost:7003/remoteEntry.js",
  },
  shared: {
    react: { requiredVersion: false },
    "react-dom": {
      requiredVersion: false,
    },
  },
};
