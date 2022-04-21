import React from "react";
import styled from "@emotion/styled";
import RoundProfile from "../atoms/RoundProfile";

const Story = ({ id, url }) => {
  return (
    <Wrapper>
      <StoryStroke>
        <RoundProfile
          url={url}
          w={"66px"}
          h={"66px"}
          css={"background:white; padding: 3px"}
        />
      </StoryStroke>

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
const StoryStroke = styled.div`
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(to right, red, purple, orange);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StoryId = styled.div`
  font-size: 12px;
  color: #262626;
  margin-top: 6px;
`;
