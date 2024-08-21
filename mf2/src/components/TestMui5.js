import { Button } from "@mui/material";

function TestMui5() {
  return (
    <div style={{ marginTop: 60 }}>
      <Button variant="text" color="primary">
        Text
      </Button>
      <Button variant="contained" color="primary" style={{ marginLeft: 20 }}>
        Contained
      </Button>
      <Button variant="outlined" color="primary" style={{ marginLeft: 20 }}>
        Outlined
      </Button>
    </div>
  );
}

export default TestMui5;
