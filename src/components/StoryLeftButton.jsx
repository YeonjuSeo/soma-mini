import React, { useState } from "react";
import styled from "@emotion/styled";

import { AiFillLeftCircle } from "react-icons/ai";

const LeftButton = ({ onClick, hidden }) => {
  const [color, setColor] = useState("#3A3A3A");

  const onMouseEnter = () => {
    setColor("#BBBBBB")
  }
  const onMouseLeave = () => {
    setColor("#3A3A3A")
  }

  return (
    <Wrapper onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <AiFillLeftCircle style={hidden ? {...IconStyle(color), ...{visibility: "hidden"}} : IconStyle(color)} />
    </Wrapper>
  );
};
export default LeftButton;

const Wrapper = styled.div`
  height: 800px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 auto;
`;
const IconStyle = (color) => { return {
  width: "30px",
  height: "30px",
  cursor: "grab",
  color: color,
  transition: "color 0.2s"
}};
