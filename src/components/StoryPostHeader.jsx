import React, { useState } from "react";
import styled from "@emotion/styled";

import { IoPlay, IoPause, IoVolumeMedium, IoVolumeMute, IoEllipsisHorizontal } from "react-icons/io5";

import RoundProfile from "../atoms/RoundProfile";

const StoryPostHeader = ({ id, profImg, time, videoControls }) => {
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);

  const RenderPlay = () => {
    if (play) {
      return (
        <IoPlay
          style={IconStyle}
          onClick={() => {
            videoControls.play();
            setPlay(!play);
          }}
        />
      );
    }
    else {
      return (
        <IoPause
          style={IconStyle}
          onClick={() => {
            videoControls.pause();
            setPlay(!play);
          }}
        />
      )
    }
  };
  const RenderMute = () => {
    if (mute) {
      return (
        <IoVolumeMute
          style={IconStyle}
          onClick={() => {
            videoControls.unmute();
            setMute(!mute);
          }}
        />
      );
    }
    else {
      return (
        <IoVolumeMedium
          style={IconStyle}
          onClick={() => {
            videoControls.mute();
            setMute(!mute);
          }}
        />
      )
    }
  };

  return (
    <Wrapper>
      <ProfileWrapper>
        <RoundProfile url={profImg} w={"32px"} h={"32px"} />
        <IdFont>{id}</IdFont>
        <TimeFont>{time}</TimeFont>
      </ProfileWrapper>
      <div>
        {RenderPlay()}
        {RenderMute()}
        <IoEllipsisHorizontal style={IconStyle} />
      </div>
    </Wrapper>
  );
};
export default StoryPostHeader;

const Wrapper = styled.div`
  width: 418px;
  display: flex;
  padding: 20px 16px;
  align-items: center;
  justify-content: space-between;
`;
const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IdFont = styled.div`
  font-size: 14px;
  margin-left: 9px;
  color: #FFFFFF;
`;
const TimeFont = styled.div`
  font-size: 14px;
  margin-left: 9px;
  color: #B5B5B0;
`;
const IconStyle = {
  width: "16px",
  height: "16px",
  padding: "8px",
  cursor: "grab",
  color: "#FFFFFF"
};
