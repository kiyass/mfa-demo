import React, { useState, useEffect } from "react";
import Mf2 from "mf2/Mf2";
export default () => {
  useEffect(() => {
    console.log("xxxx");
  }, []);

  return (
    <div style={{ margin: 100 }}>
      <Mf2 />
    </div>
  );
};
