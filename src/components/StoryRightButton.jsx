import React, { useState } from "react";
import styled from "@emotion/styled";

import { AiFillRightCircle } from "react-icons/ai";

const RightButton = ({ onClick, hidden }) => {
  const [color, setColor] = useState("#3A3A3A");

  const onMouseEnter = () => {
    setColor("#BBBBBB")
  }
  const onMouseLeave = () => {
    setColor("#3A3A3A")
  }

  return (
    <Wrapper onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <AiFillRightCircle style={hidden ? {...IconStyle(color), ...{visibility: "hidden"}} : IconStyle(color)} />
    </Wrapper>
  );
};
export default RightButton;

const Wrapper = styled.div`
  height: 800px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 auto;
`;
const IconStyle = (color) => { return {
  width: "30px",
  height: "30px",
  cursor: "grab",
  color: color,
  transition: "color 0.2s"
}};
