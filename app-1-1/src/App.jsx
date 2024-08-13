import { ThemeProvider, createTheme } from "@mui/material/styles";
import ModalProvider from "mui-modal-provider";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./App.scss";
import BasicLayout from "./components/BasicLayout";
import RemoteComponent from "./examples/RemoteComponent";
import TestCssinJs from "./examples/TestCssinJs";
import TestDialog from "./examples/TestDialog";
import TestEcharts from "./examples/TestEcharts";
import TestEditor from "./examples/TestEditor";
import TestMf1 from "./examples/TestMf1";
import TestSelect from "./examples/TestSelect";
import TestToast from "./examples/TestToast";
import TestTooltip from "./examples/TestTooltip";
import TestVideo from "./examples/TestVideo";

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
      <Toaster />
      <ThemeProvider theme={theme}>
        <Suspense fallback="loading">
          <BasicLayout>
            <Routes>
              <Route path="/" element={<TestDialog />} />
              <Route path="/cssinjs" element={<TestCssinJs />} />
              <Route path="/toastMessage" element={<TestToast />} />
              <Route path="/tooltip" element={<TestTooltip />} />
              <Route path="/select" element={<TestSelect />} />
              <Route path="/editor" element={<TestEditor />} />
              <Route path="/video" element={<TestVideo />} />
              <Route path="/echart" element={<TestEcharts />} />
              <Route path="/mf1" element={<TestMf1 />} />
              <Route
                path="/mf2"
                element={<RemoteComponent module="Mf2" scope="mf2" key="mf2" />}
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
