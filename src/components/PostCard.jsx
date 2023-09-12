import React from "react";
import { styled } from "styled-components";
import { BiDotsHorizontalRounded, BiX } from "react-icons/bi";
import { selectAllUsers } from "../features/users/usersSlice";
import { useSelector } from "react-redux";
import parseISO from "date-fns/parseISO";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  // console.log(timeAgo);

  return <TimePost title={timestamp}>{timeAgo}</TimePost>;
};

const PostCard = ({ url, content, userId, date }) => {
  const users = useSelector(selectAllUsers);
  const userName = users[userId].name;
  const userImg = users[userId].img;

  // console.log(userPost);

  return (
    <Card>
      <CardHeader>
        <ProfileWrapper>
          <ProfileImg src={userImg} />
          <Wrap>
            <ProfileName>{userName}</ProfileName>
            <TimeAgo timestamp={date} />
          </Wrap>
        </ProfileWrapper>
        <IconWrapper>
          <BiDotsHorizontalRounded size="30px" color="#65676b" />
          <BiX size={"30px"} color="#65676b" />
        </IconWrapper>
      </CardHeader>
      <CardBody>
        <Text>{content}</Text>
        <ImageWrap>{url !== "" ? <ImagePost src={url} /> : null}</ImageWrap>
      </CardBody>
    </Card>
  );
};

const Wrap = styled.div``;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 25px 0;
  /* padding: 10px; */
  max-width: 426px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  border: 2px solid #385898;
`;

const ProfileName = styled.span`
  display: block;
  font-size: 15px;
  color: #050505;
  font-family: sans-serif;
  font-weight: 700;
  margin-bottom: 2px;
`;

const TimePost = styled.span`
  display: block;
  font-size: 12px;
  color: #65676b;
  font-family: sans-serif;
  font-weight: 600;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CardBody = styled.div`
  /* background-color: lime; */
  padding: 0;
  margin: 0;
`;

const Text = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  color: #050505;
  padding: 5px 22px 15px;
  margin: 0;
`;

const ImageWrap = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ImagePost = styled.img`
  width: 100%;
  min-height: 300px;
  /* height: 500px; */
  max-height: 500px;

  @media (max-width: 768px) {
    background-color: white;
    width: 60%;
  }

  @media (max-width: 468px) {
    background-color: white;
    width: 100%;
  }
`;

export default PostCard;
