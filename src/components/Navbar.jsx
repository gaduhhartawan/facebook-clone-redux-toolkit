import React from "react";
import { styled } from "styled-components";
import {
  FaMagnifyingGlass,
  FaHouse,
  FaBell,
  FaFacebookMessenger,
  FaRegFlag,
  FaTv,
  FaVideoSlash,
} from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidNews } from "react-icons/bi";
import image from "../profile.jpg";
import { selectAllUsers } from "../features/users/usersSlice";
import { useSelector } from "react-redux";

const Navbar = ({ setShowProfile, showProfile }) => {
  const users = useSelector(selectAllUsers);
  const img = users[3].img;
  return (
    <Nav>
      <LogoWrapper>
        <Logo src="logo.png" />
        <InputWrapper>
          <Input type="text" placeholder="Cari di Facebook" />
          <FaMagnifyingGlass size="1.1em" color="#65676B" />
        </InputWrapper>
        <BurgerIcon>
          <GiHamburgerMenu />
        </BurgerIcon>
      </LogoWrapper>
      <IconWrapper>
        <Icon>
          <FaHouse size="28px" color="#1B74E4" />
        </Icon>
        <Icon>
          <FaRegFlag size="28px" color="#989ba0" />
        </Icon>
        <Icon>
          <FaTv size="28px" color="#989ba0" />
        </Icon>
        <Icon>
          <FaVideoSlash size="28px" color="#989ba0" />
        </Icon>
      </IconWrapper>
      <LinkWrapper>
        <ImgWrapper onClick={() => setShowProfile(!showProfile)}>
          <Img src={img} />
          <Dot />
        </ImgWrapper>
        <Link>
          <FaBell />
        </Link>
        <Link>
          <FaFacebookMessenger />
        </Link>
        <Link>
          <BiSolidNews />
        </Link>
      </LinkWrapper>
    </Nav>
  );
};

const BurgerIcon = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
    background-color: #f0f2f5;
    padding: 7px 14px;
    border-radius: 50px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 42px;
  height: 42px;
`;

// const Img = styled.div`
//   background-image: url(${image});
//   background-size: cover;
//   padding: 20px;
//   background-repeat: no-repeat;
//   border-radius: 50px;
// `;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 5px 20px;
  box-shadow: 1px 7px 9px -2px rgba(0, 0, 0, 0.39);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 70;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 20px;
    margin: 0;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f2f5;
  padding: 7px 14px;
  border-radius: 50px;
`;

const Input = styled.input`
  background-color: #f0f2f5;
  border: none;
  padding: 5px;
  border-radius: 50px;
  outline: none;

  @media (max-width: 960px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  /* background-color: lime; */
  gap: 85px;
  padding: 5px;
  margin-right: 50px;

  @media (max-width: 968px) {
    display: none;
  }
`;

const Icon = styled.div``;

const LinkWrapper = styled.div`
  /* background-color: lime; */
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row-reverse;
  padding: 5px;
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f2f5;
  padding: 14px;
  border-radius: 50px;

  @media (max-width: 968px) {
    display: none;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const Dot = styled.span`
  padding: 7px;
  background-color: red;
  position: absolute;
  top: -5px;
  right: -2px;
  border-radius: 50px;
  border: 2px solid white;
`;
export default Navbar;
