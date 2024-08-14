import React, { createElement } from "react";

import MicroApp from "micro-utils/MicroApp";
import { Route, Routes } from "react-router-dom";
import { name } from "../../package.json";
import "../App.scss";
import Header from "../components/AppBar";

export default function App() {
  return (
    <div className="content">
      <Header />
      <Routes>
        <Route exact path="/home" element={<div>home</div>} />
        <Route
          exact
          path="/app1/*"
          element={
            <MicroApp
              createElement={createElement}
              packageJsonName={name}
              name="app-1"
              url={process.env.PUBLIC_MICRO_APP1_URL}
              path="/app1"
              iframe={true}
            />
          }
        />
        <Route
          exact
          path="/app4/*"
          element={
            <MicroApp
              createElement={createElement}
              packageJsonName={name}
              name="app-4"
              url={process.env.PUBLIC_MICRO_APP4_URL}
              path="/app4"
              iframe={true}
            />
          }
        />
      </Routes>
    </div>
  );
}
