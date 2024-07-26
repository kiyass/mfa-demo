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
