import React from "react";
import styled from "@emotion/styled";
import RoundProfile from "../atoms/RoundProfile";

const Story = ({ id, url }) => {
  return (
    <Wrapper>
      <RoundProfile url={url} w={"66px"} h={"66px"} />
      <StoryId>{id}</StoryId>
    </Wrapper>
  );
};

export default Story;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
`;
const StoryId = styled.div`
  font-size: 12px;
  color: #262626;
  margin-top: 6px;
`;
