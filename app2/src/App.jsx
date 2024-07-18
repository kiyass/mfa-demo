import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicLayout from "./components/BasicLayout";

const App = () => {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/app2" : "/"}>
      <Suspense fallback="loading">
        <BasicLayout>
          <Routes>
            <Route path="test" element={<>test</>} />
          </Routes>
          <div id="sub-app" />
        </BasicLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
