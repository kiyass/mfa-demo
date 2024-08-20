import { Button as MuiButton } from "@mui/material";
import { useModal } from "mui-modal-provider";
import Dialog from "../components/Dialog";

function TestDialog() {
  const { showModal } = useModal();

  const handleClick = () => {
    const modal = showModal(Dialog, {
      content:
        "There are complications in previous record. Do you still want to copy from previous?",
      onOk: () => {
        modal.hide();
      },
      onCancel: () => {
        modal.hide();
      },
    });
  };
  return (
    <div style={{ margin: 60 }}>
      <MuiButton
        style={{
          paddingTop: 1,
          paddingBottom: 1,
          textTransform: "none",
          fontSize: 11,
        }}
        size="small"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        TextDialog
      </MuiButton>
    </div>
  );
}

export default TestDialog;
