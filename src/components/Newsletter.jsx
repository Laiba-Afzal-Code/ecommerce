import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
  ${mobile({fontSize:"50px"})}
`;
const Description = styled.span`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align:center;
  ${mobile({fontSize:"20px"})}
`;
const InputContainer = styled.div`
  width: 50%;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin: 10px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: none;
  outline: none;
  font-size: 15px;
  flex: 8;
`;
const Button = styled.button`
  padding: 5px 20px;
  border: none;
  cursor: pointer;
  felx: 1;
  background-color: teal;
  color: white;
`;
const Newsletter = () => {
  return (
    <>
      <Container>
        <Title>Newsletters</Title>
        <Description>
          Get Timely Updates From Your Favorite Products
        </Description>
        <InputContainer>
          <Input placeholder="Your Email" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Container>
    </>
  );
};

export default Newsletter;
