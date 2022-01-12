import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <Join>
        <h1>Vinay12siwach@gmail.com</h1>
        <h1>+91 95556 65194</h1>
      </Join>
      <Company>
        <CompanyLogo>
          <h2>SIWACH</h2>
        </CompanyLogo>
      </Company>
      <Hooker>
        <hr color="#1C1C1B" />
        <Txt>Designed And Built by Vinay Siwach</Txt>
        <hr color="#fff" />
        <Txt>All Rights Reserved</Txt>
      </Hooker>
    </Foot>
  );
}

// styles

const Foot = styled.section`
  height: auto;
  background-color: #1C1C1B;
  color: #f1d18a;
  width: 100%;
`;

const CompanyLogo = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  h2 {
    margin-top: 50px;
    margin-left: 20px;
    margin-bottom: 0;
    padding-bottom: 0;
    font-size: 30px;
    color: white;
    font-family: 'CGF Locust Resistance', sans-serif;
    letter-spacing: 3px;
    a{
      text-decoration: none;
      color: white;
    }
  }
`;

const Company = styled.div`
  border-left: 2px solid #f1d18a;
  border-bottom: 1px solid #f1d18a;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
`;

const Hooker = styled.div`
  display: flex;
  height: 60px;
  margin-left: 50px;
  overflow: hidden;
  font-size: 15px;
  flex-direction: row;
  font-family: "Play", sans-serif;
  letter-spacing: 0.5px;

  margin-bottom: 0;
  border-left: 2px solid #f1d18a;
  border-top: 1px solid #f1d18a;
  icon {
    margin: 15px 10px;
    color: #C7B9A4;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  hr {
    margin: 10px;
  }
`;

const Txt = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: left;
  letter-spacing: 1px;
`;

const Join = styled.div`
  background-color: #1C1C1B;
  margin: 0 0 0 50px;
  border-left: 2px solid #f1d18a;
  h1 {
    font-family: "Play", sans-serif;
    text-align: end;
    padding-right:70px;
    padding-top: 10px;
    font-size: 20px;
    margin: 0;
  }
`;