import Typography from "@mui/material/Typography";
import { blue, green, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
  },
}));

export default function TestBreakPoint() {
  return (
    <Root>
      <Typography>down(md): red</Typography>
      <Typography>up(md): blue</Typography>
      <Typography>up(lg): green</Typography>
    </Root>
  );
}
