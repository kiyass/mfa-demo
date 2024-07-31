/*
 *  Author:
 *  Description:
 */
import type { ModuleFederationPluginOptions } from "qiankun-utils/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "app22",
  library: { type: "umd", name: "app22" },
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
