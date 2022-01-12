import styled from "styled-components";
import { baseColor } from "styles/base";
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Contact() {
  return (
    <MainWrapper>
      <Container>
        <ul>
          <li><FiPhoneCall font-size='40px'/> : +91 95556 65194</li>
          <li><FiMail font-size='40px'/> : vinay12siwach@gmail.com</li>
          <li><AiFillGithub font-size='40px'/> : vinaysiwachvs</li>
          <li><AiFillLinkedin font-size='40px'/> : Vinay Siwach</li>
        </ul>
      </Container>
    </MainWrapper>
  );
}

export default Contact;

// styles

const MainWrapper = styled.div``;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 250px;
    background-color: #1C1C1B;
    height: 550px;
    width: auto;
    border-radius: 10px;
    ul{
      cursor: context-menu;
      color: white;
      font-size: 35px;
      letter-spacing: 1px;
      text-decoration: none;
      list-style: none;
      padding: 30px 50px;
      font-family: "Nunito", sans-serif;
      border-radius: 10px;
      transition: ease-out 300ms;
      &:hover{
        background-color: black;
        color: #E7E3D7;
        transition: ease-in 300ms;
            }
    }
    li{
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-bottom: 5px;
    }
`;