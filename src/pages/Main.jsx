// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// @import url("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css");
// @import url("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css");
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Story from "../components/Story";
import MainPost from "../organisms/MainPost";
import data from "../assets/data.json";
import Slider from "react-slick";

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <StoryWrapper>
          <Slider
            infinite={false}
            draggable={false}
            slidesToScroll={7}
            slidesToShow={7}
          >
            {data.story.map((el) => (
              <Story id={el.id} url={el.url} />
            ))}
          </Slider>
        </StoryWrapper>
        {data.post.map((el) => (
          <MainPost
            id={el.id}
            profImg={el.profImg}
            postImg={el.postImg}
            content={el.content}
            like={el.like}
            commentNum={el.commentNum}
          />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};
export default Main;

const Wrapper = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentWrapper = styled.div`
  padding: 30px 0;
  max-width: 614px;
`;
const StoryWrapper = styled.div`
  margin-bottom: 24px;
  background-color: white;
  border: 1px solid rgba(239, 239, 239, 1);
  padding: 16px 0;
  width: 100%;
`;
