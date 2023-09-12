import React from "react";
import { styled } from "styled-components";
import {
  BiWorld,
  BiGroup,
  BiSolidLike,
  BiSolidMegaphone,
} from "react-icons/bi";

import profileImg from "../profile.jpg";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/usersSlice";

const RightSidebar = () => {
  const users = useSelector(selectAllUsers);
  const username = users[3].name;
  const img = users[3].img;
  return (
    <Container>
      <Subtitle>Kelola Halaman dan Profil</Subtitle>
      <Profile>
        <Img src={img} />
        <ProfileName>{username}</ProfileName>
      </Profile>
      <List>
        <IconWrapper>
          <BiWorld size="20px" color="#65676b" />
          <Text>Jangkauan Postingan</Text>
        </IconWrapper>
        <Number>10</Number>
      </List>
      <List>
        <IconWrapper>
          <BiGroup size="20px" color="#65676b" />
          <Text>Interaksi Postingan</Text>
        </IconWrapper>
        <Number>5</Number>
      </List>
      <List>
        <IconWrapper>
          <BiSolidLike size="20px" color="#65676b" />
          <Text>Suka Halaman Baru</Text>
        </IconWrapper>
        <Number>0</Number>
      </List>
      <List>
        <IconWrapper>
          <BiSolidMegaphone size="20px" color="#65676b" />
          <Text>Buat Promosi</Text>
        </IconWrapper>
      </List>

      <LineSeparator />
    </Container>
  );
};

const LineSeparator = styled.hr`
  background-color: #00000011;
  border-color: #00000011;
  width: 105%;
  margin-top: 17px;
`;

const Container = styled.div`
  /* background-color: lime; */
  padding: 3px;
  /* width: 100%; */
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50px;
`;

const ProfileName = styled.span`
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 600;
  /* display: block; */
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding-left: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Text = styled.span`
  font-size: 12px;
  color: #65676b;
  font-family: sans-serif;
  font-weight: 600;
`;

const Number = styled(Text)`
  font-size: 14px;
  font-weight: normal;
  padding-top: 3px;
`;

const Subtitle = styled.span`
  color: #65676b;
  font-size: 17px;
  font-weight: 600;
  display: block;
  margin-bottom: 20px;
`;

export default RightSidebar;
