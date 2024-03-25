import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://media.istockphoto.com/id/1181593569/photo/cheerful-cute-girl-pointing-on-copy-space-behing-her-back.webp?b=1&s=170667a&w=0&k=20&c=1fXm6ZNocZreV1snLOiRgqH5cd-f2J2vKx4dHbYv51I=");
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
  font-size: 15px;
  outline: none;
  border-radius: 12px;
  border: none;
`;
const Agreement = styled.span`
  font-size: 20px;
  font-weight: 300;
  width: 50%;
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

const Register = () => {
  return (
    <>
      <Container>
        <Warpper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
          </Form>
          <Button>CREATE</Button>
        </Warpper>
      </Container>
    </>
  );
};

export default Register;
