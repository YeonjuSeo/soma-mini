import React from "react";
import styled from "@emotion/styled";
import RoundProfile from "../atoms/RoundProfile";

const Story = ({ id, url }) => {
  return (
    <div>
      <RoundProfile url={url} w={"66px"} h={"66px"} />
      <div>{id}</div>
    </div>
  );
};

export default Story;
