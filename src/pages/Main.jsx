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
      <ContentWrapper>
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
      </ContentWrapper>
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
const ContentWrapper = styled.div`
  padding: 30px 0;
`;
const StoryWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  background-color: white;
  border: 0.5px solid rgba(239, 239, 239, 1);
  padding: 16px 10px;
`;
