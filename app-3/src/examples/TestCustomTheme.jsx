import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.status.danger,
    "&$checked": {
      color: theme.status.danger,
    },
  },
  checked: {},
}));

function TestCustomTheme() {
  const classes = useStyles();

  return (
    <Checkbox
      defaultChecked
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
    />
  );
}

export default TestCustomTheme;
