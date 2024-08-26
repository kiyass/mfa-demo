import React, { createElement } from "react";
import { Route, Routes } from "react-router-dom";
import { MicroApp, getMicroAppsWithRoute } from "micro-utils/micro-app";
import "../App.scss";
import Header from "../components/AppBar";

export default function App() {
  console.log("getMicroAppsWithRoute", getMicroAppsWithRoute());

  return (
    <div className="content">
      <Header />
      <Routes>
        <Route exact path="/home" element={<div>home</div>} />
        {getMicroAppsWithRoute().map((item) => (
          <Route
            exact
            path={`${item.path}/*`}
            key={item.name}
            element={
              <MicroApp
                createElement={createElement}
                name={item.name}
                key={item.name}
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
}
