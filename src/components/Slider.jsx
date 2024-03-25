import styled from "@emotion/styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { silderItems } from "../data";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display:"none"})}

`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Warpper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-itmes: center;
  justify-content: center;
  background-color: ${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  padding: 50px;
  flex: 1;
`;
const Image = styled.img`
  width: 80%;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-top: 50px;
  margin-right: 20px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
  border: 5px solid black;
`;
const Slider = () => {
  const [slideIndex, setSildeIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSildeIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSildeIndex(slideIndex > 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Warpper slideIndex={slideIndex}>
          {silderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Link to={"productlist"}>
                <Button>SHOW NOW</Button>
                </Link>
              </InfoContainer>
            </Slide>
          ))}
        </Warpper>
        <Arrow direction="right" onClick={() => handleClick("left")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </>
  );
};

export default Slider;
