import styled from "styled-components";
import { baseColor } from "styles/base";
import { Social } from "components";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact, DiPython } from "react-icons/di";

function Homepage() {
  return (
    <MainWrapper>
      <Container>
        <p>Hey! I'm</p>
        <h1>Vinay Siwach</h1>
        <p>And here's my Portfolio</p>
        <p>Hope, You like it.</p>
      </Container>
      <Tech>
        <h1>Technologies I know</h1>
        <Icons>
          <p><AiFillHtml5 font-size='60px'/></p>
          <p><DiCss3 font-size='60px'/></p>
          <p><DiJavascript1 font-size='60px'/></p>
          <p><DiReact font-size='60px'/></p>
          <p><DiPython font-size='60px'/></p>
          <p><AiFillGithub font-size='60px'/></p>
        </Icons>
      </Tech>
      <Social />
    </MainWrapper>
  );
}

export default Homepage;

// styles

const MainWrapper = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Nunito", sans-serif;
  color: #C7B9A4;
  letter-spacing: 1px;
  line-height: 0;
  padding: 0;
  margin: 0;
  p{
    font-size: 25px;
  }
  h1{
    color: #E7E3D7;
    font-family: 'Play';
  }
`;

const Tech = styled.div`
  background-color:#1C1C1B;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Play';
  margin: 20px 300px;
  border-radius: 10px;
  border-bottom: 4px solid white;
  transition: ease-out 300ms;
  &:hover {
        background-color: #C7B9A4;
        color: #1C1C1B;
        border-bottom: 4px solid #C7B9A4;
        transition: ease-in 300ms;
    }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p{
    padding:0 10px;
  }
`;
