import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { orange } from "@material-ui/core/colors";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CustomCheckbox from "./components/CustomCheckbox";
import Home from "./pages/Home";

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
    background: "#c4e6c4",
  },
  container: {},
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
        <CustomCheckbox />
        <Divider />
        <List>
          <ListItem button onClick={() => handleClick("/home")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"home"} />
          </ListItem>
          <ListItem button onClick={() => handleClick("/app-2-1")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"app-2-1"} />
          </ListItem>
        </List>
      </div>
      <div className={classes.container}>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
        <div id="subapp">111</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <InnerApp />
    </ThemeProvider>
  );
};

export default App;
