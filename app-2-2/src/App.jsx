import { ThemeProvider, createTheme } from "@mui/material/styles";
import ModalProvider from "mui-modal-provider";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import BasicLayout from "./components/BasicLayout";
import TestMf4 from "./examples/TestMf4";

import { init } from "@module-federation/runtime";

init({
  name: "app22",
  remotes: [
    {
      name: "mf4",
      entry: "http://localhost:7004/remoteEntry.js",
    },
  ],
});

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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ThemeProvider theme={theme}>
        <Suspense fallback="loading">
          <BasicLayout>
            <Routes>
              <Route path="/" element={<div>home</div>} />
              <Route path="/mf4" element={<TestMf4 />} />
            </Routes>
          </BasicLayout>
        </Suspense>
      </ThemeProvider>
    </ModalProvider>
  );
};

export default App;
