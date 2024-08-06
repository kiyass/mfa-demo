import type { ModuleFederationPluginOptions } from "micro-utils/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "host",
  shared: {
    react: { requiredVersion: false },
    "react-dom": {
      requiredVersion: false,
    },
  },
};
