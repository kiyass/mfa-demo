import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { orange } from "@material-ui/core/colors";
import {
  StylesProvider,
  ThemeProvider,
  createGenerateClassName,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import "./App.scss";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import React, { createElement } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import TestDialog from "./examples/TestDialog";
// import TestMf1 from "./examples/TestMf1";
// import TestMf2 from "./examples/TestMf2";
import { Suspense } from "react/cjs/react.production.min";
import TestSelect from "./examples/TestSelect";
import TestTooltip from "./examples/TestTooltip";
import Home from "./pages/Home";

const TestMf2 = React.lazy(() => import("./examples/TestMf2"));

const generateClassName = createGenerateClassName({
  productionPrefix: "app2",
  seed: "app2",
});

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
  },
  menu: {
    width: "240px",
    background: "#afbcc5",
    height: "calc(100vh - 64px)",
  },
  testItem: {
    padding: "10px",
  },
  container: {
    flex: 1,
  },
});

const InnerApp = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <List>
          <ListItem button onClick={() => handleClick("/home")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"home"} />
          </ListItem>
          <ListItem button onClick={() => handleClick("/page1")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"page1"} />
          </ListItem>
          <ListItem button onClick={() => handleClick("/app-1-1")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"app-1-1"} />
          </ListItem>
          <ListItem button onClick={() => handleClick("/app-1-2")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"app-1-2"} />
          </ListItem>
        </List>

        <Divider />
        <div className={classes.testItem}>
          {/* <TestCustomTheme /> */}
          {/* <TestMf2 /> */}
        </div>
        <Divider />
        <div className={classes.testItem}>
          <TestDialog />
        </div>
        <Divider />
        <div className={classes.testItem}>
          <TestSelect />
        </div>
        <Divider />
        <div className={classes.testItem}>
          <TestTooltip />
        </div>
      </div>
      <div className={classes.container}>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/page1" element={<TestMf2 />} />
          <Route
            exact
            path="/app-1-1/*"
            element={createElement("micro-app-app-1", {
              name: "app-1-1",
              url: "http://localhost:2011/",
              baseroute: "/app1/app-1-1",
            })}
          />
          <Route
            exact
            path="/app-1-2/*"
            element={createElement("micro-app-app-1", {
              name: "app-1-2",
              url: "http://localhost:2012/",
              baseroute: "/app1/app-1-2",
            })}
          />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <Suspense fallback="">
          <InnerApp />
        </Suspense>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
