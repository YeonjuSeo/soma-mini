import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import ProfileImg from "../assets/Profile.jpeg";
import RoundProfile from "../atoms/RoundProfile";
import { FaRegSun } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa";
import data from "../assets/data.json";

// react-icons
import {
  HiOutlinePaperAirplane,
  HiHeart,
  HiOutlineHeart,
} from "react-icons/hi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";
import { VscEllipsis } from "react-icons/vsc";
import { BsEmojiSmile } from "react-icons/bs";
import { useLocation } from "react-router";
import Post from "../organisms/Post";


const IndivPost = () => {
  const { id, profImg, postImg, content, like, commentNum } = useLocation().state;
  return (
    <Wrapper>
      <Header />
      <PostWrapper>
      <Post 
        id={id}
        profImg={profImg}
        postImg={postImg}
        content={content}
        like={like}
        commentNum={commentNum}
      />
      </PostWrapper>
      
    </Wrapper>
  );
};
export default IndivPost;

const Wrapper = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PostWrapper = styled.div`
  padding-top: 30px ;
  max-width: 1000px;

`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  width: 250px;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
`;


