import { Tooltip } from "@material-ui/core";
import React from "react";
import Mf2 from "mf2/Mf2";

const arr = new Array(100).fill(0);

const List = React.memo(() => {
  return (
    <div style={{ color: "#000" }}>
      {/* <Tooltip title="xxx">
        <p>xxxxx</p>
      </Tooltip> */}
      <Mf2 />
      {arr.map((item, index) => (
        <div key={`${item}-${index}`}>
          {item}-{index}
        </div>
      ))}
    </div>
  );
});

// const TestComp = React.memo(() => {
//   const ref = useRef();
//   useLayoutEffect(() => {
//     const dom = ref.current;

//     ReactDOM.render(<List />, dom);
//     return () => {
//       ReactDOM.unmountComponentAtNode(dom);
//     };
//   }, []);

//   return <div ref={ref}></div>;
// });

const Page = React.memo(() => {
  return <List />;
});

export default Page;
