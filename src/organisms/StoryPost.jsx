import React, { useRef } from "react";
import styled from "@emotion/styled";

import LeftButton from "../components/StoryLeftButton";
import RightButton from "../components/StoryRightButton";
import StoryPostHeader from "../components/StoryPostHeader";
import StoryPostFooter from "../components/StoryPostFooter";

const StoryPost = ({ id, profImg, postImg, time }) => {
  const vidRef = useRef(null);

  const playVideo = () => {
    vidRef.current.play();
  }
  const pauseVideo = () => {
    vidRef.current.pause();
  }
  const muteVideo = () => {
    vidRef.current.muted = true;
  }
  const unmuteVideo = () => {
    vidRef.current.muted = false;
  }

  return (
    <Wrapper>
      <LeftButton onClick={null}/>
      <PostWrapper>
        <video ref={vidRef} height="800px" width="450px" autoPlay={true} style={PostVideoStyle}>
          <source src={postImg} type="video/mp4" />
        </video>
        <PostControlWrapper>
          <StoryPostHeader
            id = {id}
            profImg = {profImg}
            time = {time}
            videoControls = {{
              play: playVideo,
              pause: pauseVideo,
              mute: muteVideo,
              unmute: unmuteVideo
            }}
          />
          <StoryPostFooter
            id = {id}
          />
        </PostControlWrapper>
      </PostWrapper>
      <RightButton onClick={null}/>
    </Wrapper>
  );
};
export default StoryPost;

const Wrapper = styled.div`
  height: 800px;
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
`; // flex 0 0 auto로 크기 고정
const PostWrapper = styled.div`
  height: 800px;
  width: 450px;
  border-radius: 10px;
  position: relative;
`;
const PostVideoStyle = {
  borderRadius: "10px",
  position: "relative",
  zIndex: 0,
  objectFit: "cover"
};
const PostControlWrapper = styled.div`
  height: 800px;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
