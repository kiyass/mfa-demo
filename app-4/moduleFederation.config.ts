import type { ModuleFederationPluginOptions } from "micro-utils/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "app4",
  shared: {
    react: { requiredVersion: false },
    "react-dom": {
      requiredVersion: false,
    },
  },
};
