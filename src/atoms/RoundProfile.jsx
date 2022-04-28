import React from "react";
import styled from "@emotion/styled";

const RoundProfile = ({ w, h, url, css, onClick }) => {
  return <RoundedProfile onClick={onClick} w={w} h={h} src={url} css={css} />;
};
export default RoundProfile;

const RoundedProfile = styled.img`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  border-radius: 50%;
  ${(props) => props.css}
  cursor:pointer;
`;
