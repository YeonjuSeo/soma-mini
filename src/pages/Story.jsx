import React from "react";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";

import data from "../assets/data.json";

import LeftButton from "../components/StoryLeftButton";
import RightButton from "../components/StoryRightButton";
import StoryHeader from "../components/StoryHeader";
import StoryMiniPost from "../organisms/StoryMiniPost";
import StoryPost from "../organisms/StoryPost";

const Story = () => {
  const {index} = useParams();
  const navigate = useNavigate();

  const generateStoryPosts = (postDatas) => {
    let postElements = [];
    let postLeftCnt = index;
    let postRightCnt = postDatas.length - index - 1;

    // 오른쪽 버튼은 마지막 동영상이면 나가기 버튼
    const handleRightButton = () => {
      if (index == postDatas.length - 1) {
        navigate("/");
      }
      else {
        navigate(`/stories/${Number(index) + 1}`);
      }
    };

    // 대칭 맞추기용 더미
    for (let i = postLeftCnt; i < postRightCnt; ++i) {
      postElements.push(<StoryMiniPost />);
    }

    // 왼쪽 애들
    for (let i = 0; i < index; ++i) {
      postElements.push(<StoryMiniPost
        key = {postDatas[i].id}
        id = {postDatas[i].id}
        profImg = {postDatas[i].profImg}
        miniPostImg = {postDatas[i].miniPostImg}
        time = {postDatas[i].time}
      />);
    }

    // 가운데 포스트
    if (index == 0) {
      postElements.push(<LeftButton onClick={null} hidden/>);
    }
    else {
      postElements.push(<LeftButton onClick={() => {navigate(`/stories/${Number(index) - 1}`)}}/>);
    }
    postElements.push(<StoryPost
      key = {postDatas[index].id}
      id = {postDatas[index].id}
      profImg = {postDatas[index].profImg}
      postImg = {postDatas[index].postImg}
      time = {postDatas[index].time}
      onVideoEnded = {handleRightButton}
    />);
    postElements.push(<RightButton onClick={handleRightButton}/>);

    // 오른쪽 애들
    for (let i = index; ++i < postDatas.length;) {
      postElements.push(<StoryMiniPost
        key = {postDatas[i].id}
        id = {postDatas[i].id}
        profImg = {postDatas[i].profImg}
        miniPostImg = {postDatas[i].miniPostImg}
        time = {postDatas[i].time}
      />);
    }

    // 대칭 맞추기용 더미
    for (let i = postRightCnt; i < postLeftCnt; ++i) {
      postElements.push(<StoryMiniPost />);
    }

    return postElements;
  }

  return (
    <Wrapper>
      <StoryHeader />
      <ContentWrapper>
        {generateStoryPosts(data.storyPost)}
      </ContentWrapper>
    </Wrapper>
  );
};
export default Story;

const Wrapper = styled.div`
  height: 100vh;
  background-color: #1A1A1A;
`;
const ContentWrapper = styled.div`
  padding: 30px 0;
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
