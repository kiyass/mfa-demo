import { setPublicPath } from "qiankun-utils/publicPath";
const publicPath = setPublicPath();
if (publicPath) __webpack_public_path__ = publicPath;

const { bootstrap, mount, unmount } = await import("./bootstrap");
export { bootstrap, mount, unmount };
