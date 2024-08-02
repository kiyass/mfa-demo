import type { ModuleFederationPluginOptions } from "micro-utils/config";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "app11",
  library: { type: "umd", name: "app11" },
  remoteType: "script",
  filename: "remoteEntry.js",
  remotes: {
    mf1: "mf1@http://localhost:7001/remoteEntry.js",
    mf2: "mf2@http://localhost:7002/remoteEntry.js",
    mf3: "mf3@http://localhost:7003/remoteEntry.js",
    mf4: "mf4@http://localhost:7004/remoteEntry.js",
  },
  exposes: {
    "./TestEcharts": "./src/examples/TestEcharts.jsx",
  },
  dts: false,
  runtimePlugins: [require.resolve("./react-adapter-runtime-plugin.js")],
  shared: {
    react: { requiredVersion: false },
    "react-dom": {
      requiredVersion: false,
    },
    "react-router-dom": {
      requiredVersion: "6.25.1",
      shareScope: "react-17.0.2",
    },
  },
};
