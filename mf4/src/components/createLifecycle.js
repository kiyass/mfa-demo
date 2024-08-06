import ReactDOM from "react-dom/client";

export const createLifecycle = (Component) => {
  let root = null;

  const mount = (props, node) => {
    root = ReactDOM.createRoot(node);
    root.render(<Component {...props} />);
  };

  const unmount = () => {
    root.unmount();
    root = null;
  };

  return {
    mount,
    unmount,
  };
};
// import ReactDOM from "react-dom";

// export const createLifecycle = (Component) => {
//   let root = null;

//   const mount = (props, node) => {
//     root = node;
//     ReactDOM.render(<Component {...props} />, node);
//   };

//   const unmount = () => {
//     ReactDOM.unmountComponentAtNode(root);
//     root = null;
//   };

//   return {
//     mount,
//     unmount,
//   };
// };
