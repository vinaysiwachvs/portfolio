import styled from "styled-components";
import { baseColor } from "styles/base";
import { Social } from "components";
import { MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";

function Project() {
  return (
    <MainWrapper>
      <Heading><h1>My Projects</h1></Heading>
      <Pro>
      <Project1><img src="./images/ai.png" alt="" /><h1>Project 1</h1></Project1>
      <Project2><img src="./images/crypto.png" alt="" /><h1>Project 2</h1></Project2>
      <Project3><img src="./images/blackHour.png" alt="" /><h1>Project 3</h1></Project3>
      </Pro>
        <Social />
    </MainWrapper>
  );
}

export default Project;

// styles

const MainWrapper = styled.div``;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-family: 'play';
  color:#E7E3D7;
  padding-bottom: 30px;
  h1{
    padding-bottom: 15px ;
  }
`;

const Pro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Project1 = styled.div`
  font-family: 'play';
  color: #E7E3D7;
  background-color: black;
  height: auto;
  width: auto;
  margin-left: 100px;
  margin-bottom: 100px;
  text-align: center;
  img{
    height: 200px;
  }
  &:hover{
    cursor: pointer;
    margin-bottom: 95px;
    border-bottom: 5px solid #E7E3D7;
  }
`;

const Project2 = styled.div`
  font-family: 'play';
  color: #E7E3D7;
  background-color: black;
  text-align: center;
  height: auto;
  width: auto;
  margin-bottom: 100px;
  img{
    height: 200px;
  }
  &:hover{
    cursor: pointer;
    margin-bottom: 95px;
    border-bottom: 5px solid #E7E3D7;
  }
`;

const Project3 = styled.div`
  font-family: 'play';
  color: #E7E3D7;
  background-color: black;
  text-align: center;
  height: auto;
  width: auto;
  margin-right: 100px;
  margin-bottom: 100px;
  img{
    height: 200px;
  }
  &:hover{
    cursor: pointer;
    margin-bottom: 95px;
    border-bottom: 5px solid #E7E3D7;
  }
`;
