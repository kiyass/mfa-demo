import { ThemeProvider, createTheme } from "@mui/material/styles";
import ModalProvider from "mui-modal-provider";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import BasicLayout from "./components/BasicLayout";
import RemoteComponent from "./examples/RemoteComponent";
import RemoteComponent2 from "./examples/RemoteComponent2";
import TestMf1 from "./examples/TestMf1";

// import { init } from "@module-federation/runtime";

// init({
//   name: "app12",
//   remotes: [
//     {
//       name: "mf4",
//       entry: "http://localhost:7004/remoteEntry.js",
//     },
//     {
//       name: "mf2",
//       entry: "http://localhost:7002/remoteEntry.js",
//     },
//     {
//       name: "mf3",
//       entry: "http://localhost:7003/remoteEntry.js",
//     },
//     {
//       name: "mf1",
//       entry: "http://localhost:7001/remoteEntry.js",
//     },
//   ],
// });

window.appName = "app-2-2";

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "rgba(211,47,47,.9)",
          color: "#fff",
          fontSize: "11px",
        },
      },
    },
  },
  typography: {
    fontSize: 12,
  },
});
const App = () => {
  return (
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <Suspense fallback="loading">
          <BasicLayout>
            <Routes>
              <Route path="/" element={<div>home</div>} />
              <Route path="/mf3" element={<TestMf1 />} />
              <Route
                path="/mf2"
                element={
                  <RemoteComponent2 module="Mf2" scope="mf2" key="mf2" />
                }
              />
              <Route
                path="/mf4"
                element={<RemoteComponent module="Mf4" scope="mf4" key="mf4" />}
              />
            </Routes>
          </BasicLayout>
        </Suspense>
      </ThemeProvider>
    </ModalProvider>
  );
};

export default App;
