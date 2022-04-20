import React from "react";
import styled from "@emotion/styled";

import { MdHomeFilled } from "react-icons/md";
import { HiOutlinePaperAirplane, HiOutlineHeart } from "react-icons/hi";
import { FiPlusSquare } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import ProfileImg from "../assets/Profile.jpeg";
import RoundProfile from "../atoms/RoundProfile";
const Header = () => {
  return (
    <Wrapper>
      <ElementsWrapper>
        <Logo>Somagram</Logo>
        <StyledInput placeholder={"검색"} />
        <FuncsWrapper>
          <MdHomeFilled
            style={{ width: "24px", height: "24px", marginRight: "14px" }}
          />
          <HiOutlinePaperAirplane
            style={{ width: "24px", height: "24px", marginRight: "14px" }}
          />
          <FiPlusSquare
            style={{ width: "24px", height: "24px", marginRight: "14px" }}
          />
          <ImCompass2
            style={{ width: "24px", height: "24px", marginRight: "14px" }}
          />
          <HiOutlineHeart
            style={{ width: "24px", height: "24px", marginRight: "14px" }}
          />
          <RoundProfile
            alt={"Profile Img - Yawning Cat"}
            w={"24px"}
            h={"24px"}
            url={ProfileImg}
          />
        </FuncsWrapper>
      </ElementsWrapper>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;
`;
const Logo = styled.div`
  font-weight: bold;
`;
const StyledInput = styled.input`
  border: none;
  background-color: #efefef;
  border-radius: 8px;
  padding: 0 16px;
  width: 228px;
`;
const ElementsWrapper = styled.div`
  max-width: 975px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
const FuncsWrapper = styled.div``;
