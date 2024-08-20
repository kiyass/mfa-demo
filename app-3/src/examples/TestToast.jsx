import { Button as MuiButton } from "@material-ui/core";
// import { toast } from "react-toastify";

function TestToast() {
  // const handleClick = () => {
  //   toast.error("system error");
  // };
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
        TestToast
      </MuiButton>
    </div>
  );
}

export default TestToast;
