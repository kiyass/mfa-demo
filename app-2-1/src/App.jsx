import React, { Suspense } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicLayout from "./components/BasicLayout";
import ModalProvider from "mui-modal-provider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import TestDialog from "./examples/TestDialog";
import TestToast from "./examples/TestToast";
import TestTooltip from "./examples/TestTooltip";
import TestSelect from "./examples/TestSelect";
import TestEditor from "./examples/TestEditor";
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
  const url = window?.__POWERED_BY_QIANKUN_PARENT__
    ? "/app2/app-2-1"
    : "/app-2-1";

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
        <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? url : "/"}>
          <Suspense fallback="loading">
            <BasicLayout>
              <Routes>
                <Route path="/" element={<TestDialog />} />
                <Route path="/cssinjs" element={<>css in js </>} />
                <Route path="/toastMessage" element={<TestToast />} />
                <Route path="/tooltip" element={<TestTooltip />} />
                <Route path="/select" element={<TestSelect />} />
                <Route path="/editor" element={<TestEditor />} />
                <Route path="/video" element={<>视频播放器</>} />
                <Route path="/echart" element={<>echarts</>} />
              </Routes>
            </BasicLayout>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </ModalProvider>
  );
};

export default App;
