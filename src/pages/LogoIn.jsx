import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://i.pinimg.com/originals/8b/9d/38/8b9d38da228d4dddeb0b533900378a80.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  text-shadow: 2px 1px 1px black;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 20px;
  outline: none;
  border-radius: 12px;
  border: none;
  width: 200px;
  // ${mobile({ fontSize: "10px" })};
`;

const Button = styled.button`
  background-color: white;
  color: orange;
  border: none;
  border-radius: 10px;
  padding: 8px;
  width: 200px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: black;
  }
`;
const Link = styled.a`
margin:10px 0 ;
font:size;12px;
font-weight:500;
cursor:pointer;
&:hover{
    text-decoration:underline;
}

`;
const LogoIn = () => {
  return (
    <>
      <Container>
        <Warpper>
          <Title>LogoIn on Your Account</Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />

            <Button>Logo In</Button>
            <Link>Do Not You Remember the Password?</Link>
            <Link>Create an New Account</Link>
          </Form>
        </Warpper>
      </Container>
    </>
  );
};

export default LogoIn;
