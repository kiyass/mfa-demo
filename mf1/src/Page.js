import React, { useEffect } from "react";
import { createLifecycle } from "./createLifecycle";

const arr = new Array(100).fill(0);

const List = React.memo(() => {
  console.log("xxxx");

  return (
    <div style={{ color: "#000" }}>
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
