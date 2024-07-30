/*
 *  Author:
 *  Description:
 */
import type { ModuleFederationPluginOptions } from "./src/lib/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "app22",
  library: { type: "umd", name: "app22" },
  remoteType: "script",
  filename: "remoteEntry.js",
  dts: false,
  shared: {
    react: { requiredVersion: false },
    "react-dom": {
      requiredVersion: false,
    },
  },
};
