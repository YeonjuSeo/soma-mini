import React from "react";
import styled from "@emotion/styled";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

import StoryPostHeader from "../components/StoryPostHeader";
import StoryPostFooter from "../components/StoryPostFooter";

const StoryPost = ({ id, profImg, postImg, time }) => {
  return (
    <Wrapper>
      <AiFillLeftCircle style={IconStyle} />
      <PostWrapper>
        <video height="800px" width="450px" autoplay="" style={PostVideoStyle}>
          <source src={postImg} type="video/mp4" />
        </video>
        <PostControlWrapper>
          <StoryPostHeader
            id = {id}
            profImg = {profImg}
            time = {time}
          />
          <StoryPostFooter
            id = {id}
          />
        </PostControlWrapper>
      </PostWrapper>
      <AiFillRightCircle style={IconStyle} />
    </Wrapper>
  );
};
export default StoryPost;

const Wrapper = styled.div`
  height: 800px;
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
`; // flex 0 0 auto로 크기 고정
const IconStyle = {
  width: "30px",
  height: "30px",
  cursor: "grab",
  color: "#3A3A3A"
  // TODO: StoryPost에 hover시 #BBBBBB로 애니메이션
};
const PostWrapper = styled.div`
  height: 800px;
  width: 450px;
  border-radius: 10px;
  position: relative;
`;
const PostVideoStyle = {
  "border-radius": "10px",
  position: "relative",
  "z-index": 0,
  "object-fit": "cover"
};
const PostControlWrapper = styled.div`
  height: 800px;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
