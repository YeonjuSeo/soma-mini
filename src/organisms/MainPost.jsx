import React, { useState } from "react";
import styled from "@emotion/styled";

// components
import RoundProfile from "../atoms/RoundProfile";

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
import { useNavigate } from "react-router-dom";


const MainPost = ({ id, profImg, postImg, content, like, commentNum }) => {
  const [heart, setHeart] = useState(false);
  const [mark, setMark] = useState(false);

  const RenderHeartBubbleMsg = () => {
    return (
      <div>
        {heart ? (
          <HiHeart
            style={IconStyle}
            onClick={() => {
              setHeart(!heart);
            }}
          />
        ) : (
          <HiOutlineHeart
            style={IconStyle}
            onClick={() => {
              setHeart(!heart);
            }}
          />
        )}

        <IoChatbubbleOutline style={IconStyle} />
        <HiOutlinePaperAirplane style={IconStyle} />
      </div>
    );
  };
  const RenderBookMark = () => {
    return (
      <>
        {mark ? (
          <RiBookmarkFill
            style={IconStyle}
            onClick={() => {
              setMark(!mark);
            }}
          />
        ) : (
          <RiBookmarkLine
            style={IconStyle}
            onClick={() => {
              setMark(!mark);
            }}
          />
        )}
      </>
    );
  };
  const navigate = useNavigate();
  return (
    <Wrapper>
      <PostHeaderWrapper>
        <PostHeaderProfileWrapper>
          <RoundProfile
            w={"32px"}
            h={"32px"}
            url={profImg}
            css={"margin-right:14px"}
          />
          <PostHeaderId>{id}</PostHeaderId>
        </PostHeaderProfileWrapper>
        <VscEllipsis  /> 
        
      </PostHeaderWrapper>
      <PostImg 
        src={postImg} 
        onClick={() => {
              navigate("/indivPost",{state:{ 
                id:id, 
                profImg:profImg, 
                postImg:postImg, 
                content:content, 
                like:like, 
                commentNum:commentNum
              }});
        }}/>
      <BottomWrapper>
        <IconsWrapper>
          {RenderHeartBubbleMsg()}
          {RenderBookMark()}
        </IconsWrapper>
        <StrongContentTxt>????????? {heart ? like + 1 : like}???</StrongContentTxt>
        <ContentWrapper>
          <StrongContentTxt style={{ marginRight: "4px" }}>
            {id}
          </StrongContentTxt>
          {content}
        </ContentWrapper>
        <div style={{ color: "#828282", cursor: "grab" }}>
          ?????? {commentNum}??? ?????? ??????
        </div>
      </BottomWrapper>
      <ReplyWrapper>
        <BsEmojiSmile style={IconStyle} />
        <ReplyInput placeholder="?????? ??????..." />
        <ReplySubmitBtn>??????</ReplySubmitBtn>
      </ReplyWrapper>
    </Wrapper>
  );
};
export default MainPost;

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid rgba(239, 239, 239, 1);
  margin-bottom: 24px;
`;
const PostHeaderWrapper = styled.div`
  display: flex;
  padding: 14px 16px;
  align-items: center;
  justify-content: space-between;
`;
const PostHeaderProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PostHeaderId = styled.div`
  color: #262626;
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
`;
const PostImg = styled.img`
  width: 100%;
  height: auto;

  max-height: 614px;
`;
const IconStyle = {
  width: "24px",
  height: "24px",
  marginRight: "8px",
  cursor: "grab",
};
const BottomWrapper = styled.div`
  padding: 6px 16px 16px 16px;
  font-size: 14px;
  color: #262626;
`;
const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
`;
const ContentWrapper = styled.div`
  display: flex;
`;
const StrongContentTxt = styled.div`
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 8px;
`;
const ReplyWrapper = styled.div`
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.5px solid rgba(239, 239, 239, 1);
`;
const ReplyInput = styled.input`
  border: none;
  width: 80%;
  line-height: 35px;
  &:focus {
    outline: none;
  }
`;
const ReplySubmitBtn = styled.button`
  border: none;
  background: transparent;
  color: #0095f6;
  font-weight: 600;
  cursor: grab;
`;
