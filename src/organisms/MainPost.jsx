import React, { useState } from "react";
import styled from "@emotion/styled";
import RoundProfile from "../atoms/RoundProfile";
import {
  HiOutlinePaperAirplane,
  HiHeart,
  HiOutlineHeart,
} from "react-icons/hi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";

const MainPost = ({ id, profImg, postImg, content }) => {
  const [heart, setHeart] = useState(false);
  const [mark, setMark] = useState(false);
  return (
    <Wrapper>
      <PostHeaderWrapper>
        <RoundProfile w={"32px"} h={"32px"} url={profImg} />
        <div>{id}</div>
      </PostHeaderWrapper>
      <PostImg src={postImg} />
      <div>
        {heart ? (
          <HiHeart
            onClick={() => {
              setHeart(!heart);
            }}
          />
        ) : (
          <HiOutlineHeart
            onClick={() => {
              setHeart(!heart);
            }}
          />
        )}

        <IoChatbubbleOutline />
        <HiOutlinePaperAirplane />
        {mark ? (
          <RiBookmarkFill
            onClick={() => {
              setMark(!mark);
            }}
          />
        ) : (
          <RiBookmarkLine
            onClick={() => {
              setMark(!mark);
            }}
          />
        )}
      </div>
      <div>{content}</div>
    </Wrapper>
  );
};
export default MainPost;

const Wrapper = styled.div`
  background-color: white;
  border: 0.5px solid rgba(239, 239, 239, 1);
  margin-bottom: 24px;
`;
const PostHeaderWrapper = styled.div`
  display: flex;
  padding: 14px 8px 14px 16px;
  align-items: center;
`;
const PostImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 614px;
  max-height: 614px;
`;
