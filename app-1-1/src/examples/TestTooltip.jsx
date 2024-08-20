import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

function TestTooltip() {
  return (
    <div style={{ margin: 60 }}>
      <Tooltip title="Add" placement="top-start">
        <Button>top-start</Button>
      </Tooltip>
    </div>
  );
}

export default TestTooltip;
