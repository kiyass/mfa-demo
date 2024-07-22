import lifecycles from "./lifecycles";
import ReactDOM from "react-dom";
import App from "./App";

const { bootstrap, mount, unmount } = lifecycles(<App />, ReactDOM);
export { bootstrap, mount, unmount };
