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
import MicroApp from "micro-utils/MicroApp";
import React, { Suspense, createElement } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { name } from "../package.json";
import TestDialog from "./examples/TestDialog";
// import TestDraggableTable from "./examples/TestDraggableTable";
import TestSelect from "./examples/TestSelect";
import TestTooltip from "./examples/TestTooltip";
import TestVideo from "./examples/TestVideo";
import Home from "./pages/Home";

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
          {/* <Route exact path="/home" element={<TestDraggableTable />} /> */}
          <Route exact path="/page1" element={<TestVideo />} />
          <Route
            exact
            path="/app-1-1/*"
            element={
              <MicroApp
                createElement={createElement}
                packageJsonName={name}
                name="app-1-1"
                url={process.env.PUBLIC_MICRO_APP1_1_URL}
                path="/app-1-1"
                iframe={true}
              />
            }
          />
          <Route
            exact
            path="/app-1-2/*"
            element={
              <MicroApp
                createElement={createElement}
                packageJsonName={name}
                name="app-1-2"
                url={process.env.PUBLIC_MICRO_APP1_2_URL}
                path="/app-1-2"
                iframe={true}
              />
            }
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
