import { Button as MuiButton } from "@mui/material";
import { css } from "styled-components";

function TestCssinJs() {
  const dd = css`
    color: red;
  `;

  const handleClick = () => {
    console.log("dd", dd);
  };
  return (
    <div style={{ margin: 100 }}>
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
        <div css={dd}>TextDialog</div>
      </MuiButton>
    </div>
  );
}

export default TestCssinJs;
