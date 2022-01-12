import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { baseColor, baseStyle } from "styles/base";
// import { getDeviceType } from "helpers";

export default function NavBar() {
  return (
    <MainWrapper>
      <img src="/images/Header.png" alt="Image" height="100px" />
      <NavButtonsWrapper>
        <NavBtnComponent url="/home" label="Home" />
        <NavBtnComponent url='/project'label='Projects'/>
        <NavBtnComponent url="/about" label="About" />
        <ButtonComponent url='/contact'label='Contact'/>
      </NavButtonsWrapper>
    </MainWrapper>
  );
}

//functions
function NavBtnComponent(props) {
  const location = useLocation();
  return (
    <Link to={props.url}>
      <NavBtn onClick={props.onClick} active={location.pathname === props.url}>
        {props.label}
      </NavBtn>
    </Link>
  );
}
function ButtonComponent(props) {
  const location = useLocation();
  return (
    <Link to={props.url}>
      <Button onClick={props.onClick} active={location.pathname === props.url}>
        {props.label}
      </Button>
    </Link>
  );
}

//Styles
const MainWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #1C1C1B;
  font-size: 18px;
  height: 100px;
  display: flex;
  flex-direction: row;
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.5px;
  img {
    margin: 60px 40px;
  }
`;

const NavButtonsWrapper = styled.div``;

const NavBtn = styled.button`
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: #C7B9A4;
  list-style: none;
  margin: 0px 25px;
  cursor: pointer;
  border: none;
  background-color: #1C1C1B;
  letter-spacing: 1.2px;
  ${(props) => props.active && ` border-bottom: 3px solid #6D5734;`}
`;

const Button = styled.button`
  font-family: "Nunito", sans-serif;
  background-color: #C7B9A4;
  border-radius: 10px;
  border: none;
  color: #1C1C1B;
  padding: 12px 25px;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1px;
  margin: 0px 25px;
  :hover{
    background-color: #6D5734;
    color: white;
  }
`;
