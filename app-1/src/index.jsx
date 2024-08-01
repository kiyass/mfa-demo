import { setPublicPath } from "micro-utils/publicPath";
const publicPath = setPublicPath();
if (publicPath) __webpack_public_path__ = publicPath;

import("./bootstrap");
