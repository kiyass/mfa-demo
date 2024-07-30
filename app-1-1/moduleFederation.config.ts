import type { ModuleFederationPluginOptions } from "./src/lib/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "app11",
  library: { type: "umd", name: "app11" },
  remoteType: "script",
  filename: "remoteEntry.js",
  remotes: {
    mf3: "mf3@http://localhost:7003/remoteEntry.js",
  },
  exposes: {
    "./TestEcharts": "./src/examples/TestEcharts.jsx",
  },
  dts: false,
  shared: {
    react: { requiredVersion: false },
    "react-dom": {
      requiredVersion: false,
    },
  },
};
