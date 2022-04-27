import React from "react";
import styled from "@emotion/styled";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

import StoryPostHeader from "../components/StoryPostHeader";
import StoryPostFooter from "../components/StoryPostFooter";

const StoryPost = ({ id, profImg, postImg, time }) => {
  const PostWrapper = styled.div`
    height: 800px;
    width: 450px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    background-image: url(${postImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;

  return (
    <Wrapper>
      <AiFillLeftCircle style={IconStyle} />
      <PostWrapper>
        <StoryPostHeader
          id = {id}
          profImg = {profImg}
          time = {time}
        />
        <StoryPostFooter
          id = {id}
        />
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
