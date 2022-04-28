import React from "react";
import styled from "@emotion/styled";

import RoundProfile from "../atoms/RoundProfile";

const StoryMiniPost = ({ id, profImg, miniPostImg, time }) => {
  const Wrapper = styled.div`
    height: 336px;
    width: 189px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px 30px;
    flex: 0 0 auto;

    background-image: url(${miniPostImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;
  // flex 0 0 auto로 크기 고정

  if (id) {
    return (
      <Wrapper>
        <RoundProfile url={profImg} w={"56px"} h={"56px"} />
        <IdFont>{id}</IdFont>
        <TimeFont>{time}</TimeFont>
      </Wrapper>
    );
  }
  else {
    return <EmptyWrapper />
  }
};
StoryMiniPost.defaultProps = {
  id: null,
  profImg: null,
  miniPostImg: null,
  time: null
}
export default StoryMiniPost;

const IdFont = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
`;
const TimeFont = styled.div`
  font-size: 14px;
  color: #FFFFFF;
`;
const EmptyWrapper = styled.div`
  height: 336px;
  width: 189px;
`;