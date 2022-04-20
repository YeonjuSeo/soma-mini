import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Story from "../components/Story";
import data from "../assets/data.json";
import MainPost from "../organisms/MainPost";
const Main = () => {
  return (
    <Wrapper>
      <Header />
      <StoryWrapper>
        {data.story.map((el) => (
          <Story id={el.id} url={el.url} />
        ))}
      </StoryWrapper>
      {data.post.map((el) => (
        <MainPost
          id={el.id}
          profImg={el.profImg}
          postImg={el.postImg}
          content={el.content}
        />
      ))}
    </Wrapper>
  );
};
export default Main;

const Wrapper = styled.div`
  height: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StoryWrapper = styled.div`
  display: flex;
`;
