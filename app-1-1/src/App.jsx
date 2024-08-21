import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ModalProvider from "mui-modal-provider";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import TestDraggableTable from "../../app-1/src/examples/TestDraggableTable";
import "./App.scss";
import BasicLayout from "./components/BasicLayout";
import RemoteComponent from "./examples/RemoteComponent";
import TestBreakPoint from "./examples/TestBreakPoint";
import TestCssinJs from "./examples/TestCssinJs";
import DraggableDialog from "./examples/TestDraggableDialog";
import TestEcharts from "./examples/TestEcharts";
import TestEditor from "./examples/TestEditor";
import TestMf1 from "./examples/TestMf1";
import TestSelect from "./examples/TestSelect";
import TestStore from "./examples/TestStore";
import TestToast from "./examples/TestToast";
import TestTooltip from "./examples/TestTooltip";
import TestVideo from "./examples/TestVideo";

const cache = createCache({
  key: "app",
  // prepend: true, // ymmv
  speedy: false,
});

// import { init } from "@module-federation/runtime";

// init({
//   name: "app11",
//   remotes: [
//     {
//       name: "mf2",
//       entry: "http://localhost:7002/remoteEntry.js",
//     },
//     {
//       name: "mf4",
//       entry: "http://localhost:7004/remoteEntry.js",
//     },
//   ],
// });

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c27b0",
      light: "#9c27b0",
      dark: "#9c27b0",
      contrastText: "#fff",
    },
  },
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
    <CacheProvider value={cache}>
      <ModalProvider>
        <Toaster />
        <ThemeProvider theme={theme}>
          <Suspense fallback="loading">
            <BasicLayout>
              <Routes>
                <Route path="/" element={<DraggableDialog />} />
                <Route path="/draggable" element={<TestDraggableTable />} />
                <Route path="/breakpoint" element={<TestBreakPoint />} />
                <Route path="/store" element={<TestStore />} />
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
                  element={
                    <RemoteComponent module="Mf2" scope="mf2" key="mf2" />
                  }
                />
                <Route
                  path="/mf4"
                  element={
                    <RemoteComponent module="Mf4" scope="mf4" key="mf4" />
                  }
                />
              </Routes>
            </BasicLayout>
          </Suspense>
        </ThemeProvider>
      </ModalProvider>
    </CacheProvider>
  );
};

export default App;
