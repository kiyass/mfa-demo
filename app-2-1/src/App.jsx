import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicLayout from "./components/BasicLayout";

const App = () => {
  const url = window?.__POWERED_BY_QIANKUN_PARENT__
    ? "/app2/app-2-1"
    : "/app-2-1";
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? url : "/"}>
      <Suspense fallback="loading">
        <BasicLayout>
          <Routes>
            <Route path="/" element={<>mui5</>} />
            <Route path="/test" element={<>test</>} />
          </Routes>
        </BasicLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
