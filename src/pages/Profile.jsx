// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// @import url("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css");
// @import url("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css");
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import ProfileImg from "../assets/Profile.jpeg";
import RoundProfile from "../atoms/RoundProfile";
import { FaRegSun } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa";
import data from "../assets/data.json";

const Profile = () => {
  return (
    <Wrapper>
      <Header />
      <ProfileWrapper>
        <RoundProfile
          alt={"Profile Img - Yawning Cat"}
          w={"200px"}
          h={"200px"}
          url={ProfileImg}
        />
        <div>
          <ContentWrapper>
            <NickNameSpan>_cat</NickNameSpan>
            <NewButton>프로필 편집</NewButton>
            <label for="settings">
              <FaRegSun />
            </label>
          </ContentWrapper>

          <ContentWrapper>
            <span>게시물 0</span>
            <span>팔로워 0</span>
            <span>팔로우 0</span>
          </ContentWrapper>
          <ContentWrapper>
            <NameSpan>고양이</NameSpan>
          </ContentWrapper>
        </div>
      </ProfileWrapper>
      <hr width="60%" color="lightgray" noshade />
      <ContentWrapper>
        <span>
          <FaBorderAll />
          게시물
        </span>
      </ContentWrapper>
      <GridWrapper>
        {data.story.map((el) => (
          <img src={el.url} width="150px" height="150" />
        ))}
      </GridWrapper>
    </Wrapper>
  );
};
export default Profile;

const Wrapper = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  width: 250px;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
`;
const NameSpan = styled.span`
  font-size: 20px;
`;
const NickNameSpan = styled.span`
  font-size: 25px;
`;
const NewButton = styled.button`
  background: white;
  font-weight: bold;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
