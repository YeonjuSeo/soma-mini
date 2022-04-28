import React from "react";
import styled from "@emotion/styled";

import LeftButton from "../components/StoryLeftButton";
import RightButton from "../components/StoryRightButton";
import StoryHeader from "../components/StoryHeader";
import StoryMiniPost from "../organisms/StoryMiniPost";
import StoryPost from "../organisms/StoryPost";

const Story = () => {
  return (
    <Wrapper>
      <StoryHeader />
      <ContentWrapper>
        <StoryMiniPost
          id = "Profile1"
          profImg = "/assets/Story/StoryProfile1.png"
          miniPostImg = "/assets/Story/StoryMiniPost1.jpg"
          time = "20시간"
        />
        <StoryMiniPost
          id = "Profile2"
          profImg = "/assets/Story/StoryProfile2.png"
          miniPostImg = "/assets/Story/StoryMiniPost2.jpg"
          time = "21시간"
        />
        <LeftButton onClick={null}/>
        <StoryPost
          id = "Profile3"
          profImg = "/assets/Story/StoryProfile3.png"
          postImg = "/assets/Story/StoryPost3.mp4"
          time = "22시간"
        />
        <RightButton onClick={null}/>
        <StoryMiniPost
          id = "Profile4"
          profImg = "/assets/Story/StoryProfile4.png"
          miniPostImg = "/assets/Story/StoryMiniPost4.jpg"
          time = "23시간"
        />
        <StoryMiniPost />
      </ContentWrapper>
    </Wrapper>
  );
};
export default Story;

const Wrapper = styled.div`
  height: 100vh;
  background-color: #1A1A1A;
`;
const ContentWrapper = styled.div`
  padding: 30px 0;
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
