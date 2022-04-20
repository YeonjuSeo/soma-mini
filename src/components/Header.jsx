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
      <div>Sotagram</div>
      <input placeholder={"검색"} />
      <FuncsWrapper>
        <MdHomeFilled style={{ width: "24px", height: "24px" }} />
        <HiOutlinePaperAirplane style={{ width: "24px", height: "24px" }} />
        <FiPlusSquare style={{ width: "24px", height: "24px" }} />
        <ImCompass2 style={{ width: "24px", height: "24px" }} />
        <HiOutlineHeart style={{ width: "24px", height: "24px" }} />
        <RoundProfile
          alt={"Profile Img - Yawning Cat"}
          w={"24px"}
          h={"24px"}
          url={ProfileImg}
        />
      </FuncsWrapper>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FuncsWrapper = styled.div``;
