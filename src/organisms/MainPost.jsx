import React from "react";
import styled from "@emotion/styled";
import RoundProfile from "../atoms/RoundProfile";
const MainPost = ({ id, profImg, postImg, content }) => {
  return (
    <Wrapper>
      <PostHeaderWrapper>
        <RoundProfile w={"32px"} h={"32px"} url={profImg} />
        <div>{id}</div>
      </PostHeaderWrapper>
      <PostImg src={postImg} />
      <div>{content}</div>
    </Wrapper>
  );
};
export default MainPost;

const Wrapper = styled.div`
  background-color: white;
  border: 0.5px solid rgba(239, 239, 239, 1);
`;
const PostHeaderWrapper = styled.div`
  display: flex;
`;
const PostImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 614px;
  max-height: 614px;
`;
