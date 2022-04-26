import React from "react";
import { Routes, Route } from "react-router";
import Main from "./pages/Main";
import Story from "./pages/Story";
const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stories/" element={<Story />} />
      </Routes>
    </>
  );
};
export default Root;
