import Divider from "@material-ui/core/Divider";
import "./App.scss";
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
import { BrowserRouter } from "react-router-dom";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import TestCustomTheme from "./examples/TestCustomTheme";
import TestDialog from "./examples/TestDialog";
import TestSelect from "./examples/TestSelect";
import TestTooltip from "./examples/TestTooltip";
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
          <ListItem button onClick={() => handleClick("/app-2-1")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"app-2-1"} />
          </ListItem>
        </List>
        <Divider />
        <div className={classes.testItem}>
          <TestCustomTheme />
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
          <Route exact path="/page1" element={<div>page1</div>} />
        </Routes>
        <div id="subapp-container"></div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter
      basename={window.__POWERED_BY_QIANKUN_PARENT__ ? "/app2" : "/"}
    >
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <InnerApp />
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
