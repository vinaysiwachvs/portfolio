import styled from "styled-components";
import { baseColor } from "styles/base";
import { Social } from "components";
import styledComponents from "styled-components";

function About() {
  return (
    <MainWrapper>
      <Intro>
        <h1>Electrical Engineer | FrontEnd Devloper</h1>
        <h2>I design and code beautiful simple things, and that's what I love to do.</h2>
        <img src="./images/vinay.png" alt="" />
      </Intro>
      <Abt>
        <h1>Hey, It's all about me.</h1>
        <h2>I'm a Electrical Engineering student, currently pursuing Bachelor of Technology 
          and a minor degree in Artificial Intelligence and Machine Learning 
          from Deenbandhu Chhotu Ram University of Science & Technology. 
          I'm a responsible and diligent individual that can communicate 
          and interact effectively in a group environment. </h2>
      </Abt>
      <Education>
        <h1>CERTIFICATION</h1>
      </Education>
        <C1><ul><h1>Udemy</h1>
          <li>The Web Developer Bootcamp.</li>
          <li>Javascript Complete Beginners Course for Web Development.</li>
          <li>Learn to code with Python form Scratch.</li>
        </ul>
        <ul><h1>MITx</h1>
          <li>LaunchX: Becoming an Entrepreneur.</li>
          <li> Bootcamp2: Entrepreneurship 102.</li>
        </ul>
        <ul><h1>Guvi</h1>
          <li>Introduction to Programming Using Python.</li>
          <li>Step into Robotic Process Automation.</li>
        </ul>
        </C1>
      <Social />
    </MainWrapper>
  );
}

export default About;

// styles

const MainWrapper = styled.div`
  img{
    height: 200px;
    border-radius: 25px;
    padding: 0;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'play';
  color:#E7E3D7;
  line-height: 5px;
  letter-spacing: 1px;
  h1{
    font-size: 30px;
    padding-top: 10px;
  }
  h2{
    font-size: 25px;
    padding-bottom: 10px;
  }
`;

const Abt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'play';
  border-radius: 25px;
  margin: 50px 80px;
  padding: 50px;
  background-color: #E7E3D7;
  line-height: 1.2;
  letter-spacing: 1px;
  transition: ease-out 300ms;
  h1{
    padding: 0 10px;
    border-radius: 5px;
    width: fit-content;
    }
  h2{
    font-family:"Nunito", sans-serif;
  }
  &:hover{
    background-color: #1C1C1B;
    color: #E7E3D7;
    transition: ease-in 300ms;
    cursor: pointer;
  }
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #E7E3D7;
  letter-spacing: 2px;
  font-family: 'CGF Locust Resistance', sans-serif;
  border-top: 3px solid;
`;

const C1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 25px;
  align-items: center;
  color: #E7E3D7;
  font-family: 'play';
  background-color: black;
  padding-bottom: 30px;
  h1{
    padding-bottom: 1px;
    border-bottom: solid 3px;
    width: fit-content;
    }
  li{
    font-size: 20px;
    list-style: square;
    font-family:"Nunito", sans-serif;
    }
`;