import React from "react";
import styled from "@emotion/styled";

const RoundProfile = ({ w, h, url }) => {
  return <RoundedProfile w={w} h={h} src={url} />;
};
export default RoundProfile;

const RoundedProfile = styled.img`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  border-radius: 50%;
`;
