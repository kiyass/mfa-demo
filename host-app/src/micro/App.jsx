import React, { createElement, Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import "../App.scss";
import MicroApp from "micro-utils/MicroApp";
import Header from "../components/AppBar";
import { name } from "../../package.json";

export default function App() {
  return (
    <Suspense>
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
                name="app1"
                url={process.env.PUBLIC_MICRO_APP1_URL}
                path="/app1"
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
                name="app4"
                url={process.env.PUBLIC_MICRO_APP4_URL}
                path="/app4"
              />
            }
          />
        </Routes>
      </div>
    </Suspense>
  );
}
