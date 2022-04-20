import React from "react";
import { Routes, Route } from "react-router";
import Main from "./pages/Main";
const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};
export default Root;
