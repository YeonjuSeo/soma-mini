import React, { useState } from "react";
import styled from "@emotion/styled";

import { HiHeart, HiOutlineHeart, HiOutlinePaperAirplane } from "react-icons/hi";

const StoryPostFooter = ({ id }) => {
  const [heart, setHeart] = useState(false);
  const [color, setColor] = useState("#FFFFFF");
  let replyString = `${id}님에게 답장하기...`;

  const RenderHeart = () => {
    if (heart) {
      return (
        <HiHeart
          style={IconStyle(color)}
          onClick={() => {
            setHeart(!heart);
          }}
        />
      );
    }
    else {
      return (
        <HiOutlineHeart
          style={IconStyle(color)}
          onClick={() => {
            setColor("#ED4956")
            setHeart(!heart);
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )
    }
  };

  const onMouseEnter = () => {
    setColor("#8E8E8E")
  }
  const onMouseLeave = () => {
    setColor("#FFFFFF")
  }

  return (
    <Wrapper>
      <ReplyInput placeholder = {replyString} />
      {RenderHeart()}
      <HiOutlinePaperAirplane style={IconStyle("#FFFFFF")} />
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
const IconStyle = (color) => { return {
  width: "24px",
  height: "24px",
  cursor: "grab",
  color: color
}};
