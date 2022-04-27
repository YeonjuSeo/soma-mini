import React from "react";
import styled from "@emotion/styled";

import { HiHeart, HiOutlineHeart, HiOutlinePaperAirplane } from "react-icons/hi";

const StoryPostFooter = ({ id }) => {
  let replyString = `${id}님에게 답장하기...`;

  return (
    <Wrapper>
      <ReplyInput placeholder = {replyString} />
      <HiOutlineHeart style={IconStyle} />
      <HiOutlinePaperAirplane style={IconStyle} />
    </Wrapper>
  );
};
export default StoryPostFooter;

const Wrapper = styled.div`
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
const IconStyle = {
  width: "24px",
  height: "24px",
  cursor: "grab",
  color: "#FFFFFF"
  // TODO: 하트 클릭시 #ED4956
};
