import React from "react";
import { styled } from "styled-components";
import image from "../profile.jpg";
import { selectAllUsers } from "../features/users/usersSlice";
import { useSelector } from "react-redux";

const LeftSidebar = () => {
  const users = useSelector(selectAllUsers);
  const username = users[3].name;
  const img = users[3].img;

  // console.log(username);
  return (
    <Container>
      {/* List Profile */}
      {[
        {
          source: img,
          text: username,
        },
        {
          source:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/ATlxuj_J5ty.png",
          text: "Pengelola Iklan",
        },
        {
          source:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png",
          text: "Pusat Iklan",
        },
        {
          source:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/xjjUm0K8VyX.png",
          text: "Meta Business Suite",
        },
        {
          source:
            "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/UcI9fM2oUUV.png",
          text: "Dasbor Profesional",
        },
      ].map((item) => (
        <List>
          <Img src={item.source} />
          <Text>{item.text}</Text>
        </List>
      ))}
      <LineSeparator />
      <Subtitle>Disarankan</Subtitle>
      {[
        {
          source:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png",
          text: "Kabar",
        },
        {
          source:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png",
          text: "Grup",
        },
        {
          source:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png",
          text: "Video",
        },
        {
          source:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png",
          text: "Kenangan",
        },
        {
          source:
            "https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png",
          text: "Tersimpan",
        },
      ].map((item, index) => (
        <List key={index}>
          <Img src={item.source} />
          <Text>{item.text}</Text>
        </List>
      ))}
    </Container>
  );
};

const Container = styled.div`
  /* position: sticky;
  top: 0;
  left: 0;
  z-index: 3; */
  /* background-color: lime; */
  padding: 3px;
  padding-right: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const List = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50px;
`;

const Text = styled.span`
  /* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 600;
`;

const Subtitle = styled.span`
  color: #65676b;
  font-size: 17px;
  font-weight: 600;
  display: block;
  margin-bottom: 20px;
`;

const LineSeparator = styled.hr`
  background-color: #00000011;
  border-color: #00000011;
  width: 120%;
  margin-top: 17px;
`;

export default LeftSidebar;
