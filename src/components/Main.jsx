import React, { useState } from "react";
import { styled } from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { postAdded, selectAllPosts } from "../features/posts/postSlice";

import profileImg from "../profile.jpg";
import PostCard from "./PostCard";
import { selectAllUsers } from "../features/users/usersSlice";

const SocialLink = ({ link, text, event }) => (
  <IconWrapper onClick={event}>
    <Icon src={link} />
    <Text>{text}</Text>
  </IconWrapper>
);

const Main = () => {
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers);
  const username = users[3].name;
  const img = users[3].img;

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState(false);
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handlePhoto = () => {
    setPhoto(!photo);
  };

  const onSavePostClicked = () => {
    dispatch(postAdded(content, imgUrl));

    setContent("");
    setImgUrl("");
    if (photo === true) {
      setPhoto(false);
    }
  };

  const canSave = Boolean(content);

  return (
    <Container>
      <FormCard>
        <form>
          <InputWrapper>
            <Img src={img} />
            <Input
              placeholder={`Apa yang anda pikirkan, ${username}?`}
              onChange={(e) => setContent(e.target.value)}
              value={content}
              name="content"
              type="text"
            />
          </InputWrapper>
          {photo && (
            <Input
              placeholder="Masukkan URL Foto..."
              onChange={(e) => setImgUrl(e.target.value)}
              value={imgUrl}
              name="img"
              type="text"
            />
          )}
          <Button type="button" onClick={onSavePostClicked} disabled={!canSave}>
            Submit
          </Button>
        </form>

        <SocialWrapper>
          {[
            {
              url: "https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png",
              text: "Video Siaran Langsung",
            },
            {
              url: "https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png",
              text: "Foto/video",
            },
            {
              url: "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/t2NS5_5UwDb.png",
              text: "Reel",
            },
          ].map((item, index) => (
            <SocialLink
              key={index}
              link={item.url}
              text={item.text}
              event={() => handlePhoto()}
            />
          ))}
        </SocialWrapper>
      </FormCard>
      {orderedPosts.map((post) => (
        <PostCard
          content={post.content}
          url={post.img}
          userId={post.userId}
          date={post.date}
          key={post.id}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  /* background-color: lime; */
  /* width: 100%; */
`;

const Button = styled.button`
  background-color: #1b74e4;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 50px;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #135bb4;
  }

  &:disabled {
    background-color: grey;
    color: lightgray;
    cursor: not-allowed;
  }
`;

const FormCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  /* padding-bottom: 20px; */
  /* background-color: lemonchiffon; */
  gap: 10px;

  @media (max-width: 768px) {
    /* width: 100%; */
    padding: 10px;
  }
`;

const Img = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  background-color: #f0f2f5;
  width: 300px;
  padding: 9px 19px;
  border-radius: 50px;
  font-size: 18px;
  font-family: sans-serif;
  width: 100%;
`;

const SocialWrapper = styled.div`
  margin: 10px 0;
  padding: 5px 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  border-top: 1px solid lightgrey;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
`;

const Icon = styled.img``;

const Text = styled.span`
  color: #65676b;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 600;
`;

export default Main;
