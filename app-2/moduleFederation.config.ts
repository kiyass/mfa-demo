import type { MF } from "./test";

export const mfConfig: MF = {
  name: "main",
  remotes: {
    mf1: "mf1@http://localhost:7001/remoteEntry.js",
    mf2: "mf2@http://localhost:7002/mf-manifest.json",
    appx: "appx@http://localhost:8021/remoteEntry.js",
  },
  runtimePlugins: [require.resolve("./react-adapter-runtime-plugin.js")],
  shared: {
    react: { requiredVersion: "17.0.2", singleton: true },
    "react-dom": {
      requiredVersion: "17.0.2",
      singleton: true,
    },
  },
};
