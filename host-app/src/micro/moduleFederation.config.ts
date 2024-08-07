import type { ModuleFederationPluginOptions } from "micro-utils/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "host",
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
