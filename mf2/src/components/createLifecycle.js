import ReactDOM from "react-dom";

export const createLifecycle = (Component) => {
  let root = null;

  const mount = (props, node) => {
    root = node;
    ReactDOM.render(<Component {...props} />, node);
  };

  const unmount = () => {
    ReactDOM.unmountComponentAtNode(root);
    root = null;
  };

  return {
    mount,
    unmount,
  };
};
