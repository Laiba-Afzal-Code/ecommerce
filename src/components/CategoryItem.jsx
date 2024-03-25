import styled from "@emotion/styled";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: black;
    opacity: 0.5;
  }
`;
const Title = styled.h1`
  color: white;
  margin-bootom: 20px;
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 20px;
  background-color: white;
  color: gray;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 5px;
`;

const CategoryItem = ({ item }) => {
  return (
    <>
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </Container>
    </>
  );
};

export default CategoryItem;
