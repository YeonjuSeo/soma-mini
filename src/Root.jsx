import React from "react";
import { Routes, Route } from "react-router";
import Main from "./pages/Main";
import Story from "./pages/Story";
import Profile from "./pages/Profile";
import IndivPost from "./pages/IndivPost";
const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/indivPost" element={<IndivPost />} />
      </Routes>
    </>
  );
};
export default Root;
