import { Tooltip } from "@material-ui/core";
import React from "react";

const arr = new Array(100).fill(0);

const List = React.memo(() => {
  return (
    <>
      <Tooltip title="xxx">
        <p>xxxxx</p>
      </Tooltip>
      {arr.map((item, index) => (
        <div key={`${item}-${index}`}>
          {item}-{index}
        </div>
      ))}
    </>
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
