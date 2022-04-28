import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { MdClose } from "react-icons/md";

const StoryHeader = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        Somagram
      </Logo>
      <MdClose
        onClick={() => {
          navigate("/");
        }}
        style={IconStyle}
      />
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
  color: #ffffff;
  cursor: cursor;
  user-select: none;
`;
const IconStyle = {
  width: "40px",
  height: "40px",
  marginRight: "32px",
  cursor: "grab",
  color: "#FFFFFF",
};
