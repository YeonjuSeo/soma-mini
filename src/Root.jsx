import React from "react";
import { Routes, Route } from "react-router";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};
export default Root;
