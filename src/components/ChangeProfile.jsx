import React, { useState } from "react";
import { styled } from "styled-components";
import { editUser, selectAllUsers } from "../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

import { BiX } from "react-icons/bi";

const ChangeProfile = ({ setShowProfile }) => {
  const users = useSelector(selectAllUsers);
  const currentUser = users[3].name;
  const [username, setUsername] = useState(currentUser);
  const [imgUrl, setImgUrl] = useState("");

  const canSubmit = Boolean(username);

  const dispatch = useDispatch();
  const onSubmitProfile = () => {
    dispatch(editUser({ username: username, url: imgUrl }));

    setShowProfile(false);
  };
  return (
    <Container onClick={() => setShowProfile(false)}>
      <Card>
        <CardHeader>
          <Title>Change Profile</Title>
          <BiX
            size={"30px"}
            color="black"
            onClick={() => setShowProfile(false)}
            style={{ cursor: "pointer" }}
          />
        </CardHeader>
        <CardBody>
          <form>
            <Label>Username:</Label>
            <InputName
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <Label>Image URL:</Label>
            <InputImage
              type="text"
              onChange={(e) => setImgUrl(e.target.value)}
              value={imgUrl}
            />
            <Button
              type="button"
              disabled={!canSubmit}
              onClick={onSubmitProfile}
            >
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 80;

  background-color: #00000040;
  @media (max-width: 968px) {
    /* display: none; */
  }
`;

const Card = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 20px 30px;
  background-color: white;
  box-shadow: 0px 0px 11px 5px rgba(0, 0, 0, 0.8);
  border-radius: 15px;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 100;

  @media (max-width: 968px) {
    width: 100%;
    height: 100%;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled.span`
  font-size: 18px;
  /* font-family: sans-serif; */
  font-weight: 600;
`;

const CardBody = styled.div``;

const Label = styled.span`
  margin-left: 3px;
  font-weight: 600;
`;

const InputName = styled.input`
  display: block;
  margin: 5px 0 20px;

  outline: none;
  border: none;

  background-color: #f0f2f5;
  border: 1px solid grey;
  border-radius: 50px;
  padding: 7px 20px;
  font-size: 18px;

  @media (max-width: 968px) {
    width: 100%;
  }
`;

const InputImage = styled(InputName)``;

const Button = styled.button`
  border: none;
  background-color: #1b74e4;
  color: white;
  padding: 10px;
  border-radius: 50px;
  width: 100%;

  &:hover {
    background-color: #135bb4;
  }

  &:disabled {
    background-color: grey;
    color: lightgray;
    cursor: not-allowed;
  }

  @media (max-width: 968px) {
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    width: 90%;
    margin: 0 auto;
  }
`;

export default ChangeProfile;
