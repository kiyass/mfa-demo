import React, { useEffect } from "react";
import Mf2 from "mf2/Mf2";

const arr = new Array(100).fill(0);

console.log("react", window.React === React, React, window.React);

const List = React.memo(() => {
  useEffect(() => {
    console.log("xxxxx");
  }, []);

  return (
    <div style={{ color: "#000" }}>
      <Mf2 />
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

export default Page;
