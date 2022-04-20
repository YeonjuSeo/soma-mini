import React from "react";
import styled from "@emotion/styled";
import RoundProfile from "../atoms/RoundProfile";
const MainPost = () => {
  return (
    <Wrapper>
      <PostHeaderWrapper>
        <RoundProfile w={"32px"} h={"32px"} url={"/assets/Profile6.jpeg"} />
        <div>아이디</div>
      </PostHeaderWrapper>
      <PostImg src={"/assets/Post5.jpeg"} />
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
