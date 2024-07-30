/*
 *  Author:
 *  Description:
 */
import type { ModuleFederationPluginOptions } from "./src/lib/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "app12",
  library: { type: "umd", name: "app12" },
  remoteType: "script",
  filename: "remoteEntry.js",
  remotes: {
    mf3: "mf3@http://localhost:7003/remoteEntry.js",
  },
  dts: false,
  shared: {
    react: { requiredVersion: false },
    "react-dom": {
      requiredVersion: false,
    },
  },
};
