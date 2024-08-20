import Mf2 from "mf2/Mf2";
import React, { useEffect } from "react";
export default () => {
  useEffect(() => {
    console.log("xxxx");
  }, []);

  return (
    <div style={{ margin: 60 }}>
      <Mf2 />
    </div>
  );
};
