// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// @import url("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css");
// @import url("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css");
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Story from "../components/Story";
import MainPost from "../organisms/MainPost";
import data from "../assets/data.json";
import Slider from "react-slick";
import PostCreation from "./PostCreation";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [modalOn, setModalOn] = useState(false);
  const [postData, setPostData] = useState(data);
  const navigate = useNavigate();

  function addPost(img, content) {
    postData.post.unshift({
      id: "_cat",
      profImg: "/assets/Profile4.jpeg",
      postImg: img,
      content: content,
      like: 0,
      commentNum: 0,
    });
  }

  // data = {
  //   ...postData,
  //   post:postData.post.unshift({
  //     "id": "id1",
  //     "profImg": "/assets/Profile4.jpeg",
  //     "postImg": "/assets/Post1.jpeg",
  //     "content": "어쩌구저쩌구",
  //     "like": 33,
  //     "commentNum": 49
  //   })
  // }

  console.log(postData);
  return (
    <Wrapper>
      <>
        {modalOn ? (
          <PostCreation addPost={addPost} setModalOn={setModalOn} />
        ) : (
          ""
        )}
      </>

      <Header setModalOn={setModalOn} />
      <ContentWrapper>
        <StoryWrapper>
          <Slider
            infinite={false}
            draggable={false}
            slidesToScroll={7}
            slidesToShow={7}
          >
            {data.story.map((el) => (
              <Story
                onClick={() => {
                  navigate("/stories");
                }}
                id={el.id}
                url={el.url}
              />
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
