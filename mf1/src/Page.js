import React, { useEffect } from "react";
import { createLifecycle } from "./createLifecycle";
// import Mf2 from "mf2/Mf2";
import TestStore from "./TestStore";

const arr = new Array(100).fill(0);

const List = React.memo(() => {
  useEffect(() => {
    console.log("xxxx");
  }, []);

  return (
    <div style={{ color: "#000" }}>
      {/* <Mf2 /> */}
      <TestStore />
      {arr.map((item, index) => (
        <div key={`${item}-${index}`}>
          {item}-{index}
        </div>
      ))}
    </div>
  );
});

const Page = React.memo(() => {
  return <List />;
});
export const lifecycle = createLifecycle(Page);

export default Page;
