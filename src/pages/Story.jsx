import React from "react";
import styled from "@emotion/styled";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IoPlay, IoPause, IoVolumeMedium, IoVolumeMute, IoEllipsisHorizontal } from "react-icons/io5";
import {
  HiHeart,
  HiOutlineHeart,
  HiOutlinePaperAirplane,
} from "react-icons/hi";

import RoundProfile from "../atoms/RoundProfile";
import StoryHeader from "../components/StoryHeader";
import StoryMiniPost from "../organisms/StoryMiniPost";

const Story = () => {
  return (
    <Wrapper>
      <StoryHeader />
      <ContentWrapper>
        <StoryMiniPost
          id = {null}
          profImg = {null}
          miniPostImg = {null}
          time = {null}
        />
        <StoryMiniPost
          id = "Profile1"
          profImg = "/assets/Story/StoryProfile1.png"
          miniPostImg = "/assets/Story/StoryMiniPost1.jpg"
          time = "20시간"
        />

        <StoryPostWrapper>
          <AiFillLeftCircle style={IconStyle2} />
          <StoryPost>
            <StoryHeaderWrapper>
              <StoryHeaderProfileWrapper>
                <RoundProfile url={"/assets/Story/StoryProfile2.png"} w={"32px"} h={"32px"} />
                <StoryHeaderProfileFont>Profile2</StoryHeaderProfileFont>
                <StoryHeaderProfileFont>21시간</StoryHeaderProfileFont>
              </StoryHeaderProfileWrapper>
              <div>
                <IoPause style={IconStyle3} />
                <IoVolumeMedium style={IconStyle3} />
                <IoEllipsisHorizontal style={IconStyle3} />
              </div>
            </StoryHeaderWrapper>

            <StoryFooterWrapper>
              <ReplyInput placeholder="Profile2님에게 답장하기..." />
              <HiOutlineHeart style={IconStyle4} />
              <HiOutlinePaperAirplane style={IconStyle4} />
            </StoryFooterWrapper>
          </StoryPost>
          <AiFillRightCircle style={IconStyle2} />
        </StoryPostWrapper>

        <StoryMiniPost
          id = "Profile3"
          profImg = "/assets/Story/StoryProfile3.png"
          miniPostImg = "/assets/Story/StoryMiniPost3.jpg"
          time = "22시간"
        />
        <StoryMiniPost
          id = "Profile4"
          profImg = "/assets/Story/StoryProfile4.png"
          miniPostImg = "/assets/Story/StoryMiniPost4.jpg"
          time = "23시간"
        />
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
const StoryPostWrapper = styled.div`
  height: 800px;
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
`;
const IconStyle2 = {
  width: "30px",
  height: "30px",
  cursor: "grab",
  color: "#3A3A3A"
  // wrapper hover시 #BBBBBB로 애니메이션
};
const IconStyle3 = {
  width: "16px",
  height: "16px",
  padding: "8px",
  cursor: "grab",
  color: "white"
};
const StoryPost = styled.div`
  height: 800px;
  width: 450px;
  border-radius: 10px;
  background-image: url("/assets/Story/StoryPost2.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const StoryHeaderWrapper = styled.div`
  width: 418px;
  display: flex;
  padding: 20px 16px;
  align-items: center;
  justify-content: space-between;
`;
const StoryHeaderProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StoryHeaderProfileFont = styled.div`
  font-size: 14px;
  margin-left: 9px;
  color: white;
`;

const StoryFooterWrapper = styled.div`
  width: 418px;
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;
const ReplyInput = styled.input`
  border: 1px solid white;
  border-radius: 100vh;
  width: 70%;
  line-height: 35px;
  background-color: #00000000;
  color: #8A8786;
  padding: 0px 11px;
`;
const IconStyle4 = {
  width: "24px",
  height: "24px",
  cursor: "grab",
  color: "white"
  // 하트 클릭시 #ED4956
};
