import React from "react";
import { Link, Outlet } from "react-router-dom";

const PageContainer = () => (
  <>
    <div>
      <Link to="/page">page</Link>
    </div>
    <p>
      <Link to="/about">about</Link>
    </p>
    <div data-testid="pageContainer">
      <Outlet />
    </div>
  </>
);

export default PageContainer;
