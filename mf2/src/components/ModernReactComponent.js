import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { a, getLib1InstanceId } from "mf3/utils";
import React, { useState } from "react";
import TestCssinJs from "./TestCssinJs";
import TestMui5 from "./TestMui5";
import TestStore from "./TestStore";
import { createLifecycle } from "./createLifecycle";

const cache = createCache({
  key: "mf2",
  // prepend: true, // ymmv
  speedy: false,
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32",
      light: "#2e7d32",
      dark: "#2e7d32",
      contrastText: "#fff",
    },
  },
});

// console.log(a);
const ModernReactComponent = (props) => {
  const { children, input } = props;
  const [aS, setAS] = useState();
  const [aVal, setAVal] = useState();
  const [id, setId] = useState();

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <div style={{ color: "#000" }}>
          <strong>React {React.version}</strong>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              a.value = Date.now();
              console.log("set a.value", a.value, getLib1InstanceId());
              setAS(a.value);
            }}
          >
            Set mf3 a.value: {aS}
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              setAVal(a.value);
            }}
          >
            Get mf3 a.value: {aVal}
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              setId(getLib1InstanceId());
            }}
          >
            Get window.instanceId: {id}
          </button>
          <br />
          <TestStore />
          <TestCssinJs />
          <TestMui5 />
          {/* <h2>Text form legacy React app: {input}</h2> */}
          {children}
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export const lifecycle = createLifecycle(ModernReactComponent);

export default ModernReactComponent;
