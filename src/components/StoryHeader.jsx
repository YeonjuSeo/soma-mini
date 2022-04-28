import React from "react";
import styled from "@emotion/styled";

import { MdClose } from "react-icons/md";

const StoryHeader = () => {
  return (
    <Wrapper>
      <Logo>Somagram</Logo>
      <MdClose style={IconStyle} />
    </Wrapper>
  );
};
export default StoryHeader;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
`;
const Logo = styled.div`
  font-weight: bold;
  color: #FFFFFF;
  cursor: default;
  user-select: none;
`;
const IconStyle = {
  width: "40px",
  height: "40px",
  marginRight: "32px",
  cursor: "grab",
  color: "#FFFFFF"
};
