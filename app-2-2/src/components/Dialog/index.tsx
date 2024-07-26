import React from "react";
import {
  Dialog as MuiDialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

interface IDialogPropsProps extends Omit<DialogProps, "content"> {
  title?: string;
  content: string | React.ReactNode;
  onOk: (event) => void;
  okProps?: {
    text?: string;
  };
  onCancel: (event) => void;
  cancelProps?: {
    text?: string;
  };
}

const Dialog: React.FC<IDialogPropsProps> = ({
  title = "Confirmation",
  content,
  onOk,
  onCancel,
  okProps = { text: "Yes" },
  cancelProps = { text: "No" },
  ...props
}) => (
  <MuiDialog {...props} sx={{ ".MuiDialog-paper": { minWidth: 280 } }}>
    <DialogTitle style={{ fontSize: 14 }}>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText style={{ fontSize: 12 }}>{content}</DialogContentText>
    </DialogContent>
    <DialogActions style={{ textAlign: "right" }}>
      <Button
        onClick={onOk}
        style={{
          paddingTop: 1,
          paddingBottom: 1,
          textTransform: "none",
          fontSize: 11,
        }}
        size="small"
        color="primary"
      >
        Yes
      </Button>
      <Button
        style={{
          paddingTop: 1,
          paddingBottom: 1,
          textTransform: "none",
          fontSize: 11,
        }}
        onClick={onCancel}
        size="small"
        color="inherit"
      >
        No
      </Button>
    </DialogActions>
  </MuiDialog>
);
export default Dialog;
