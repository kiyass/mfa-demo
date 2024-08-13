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
    // mf1: "mf1@http://localhost:7001/remoteEntry.js",
    mf2: "mf2@http://localhost:7002/remoteEntry.js",
    mf3: "mf3@http://localhost:7003/remoteEntry.js",
    mf4: "mf4@http://localhost:7004/remoteEntry.js",
  },
  shared: {
    react: {
      requiredVersion: "17.0.2",
      // shareScope: "react@17.0.1",
    },
    "react-dom": {
      requiredVersion: "17.0.2",
      // shareScope: "react@17.0.1",
    },
    "react-router-dom": {
      requiredVersion: "6.25.1",
      shareKey: "react-router-dom@react@17.0.2",
    },
  },
};
