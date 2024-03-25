import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;
const Warpper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({flexDirection:"column"})}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.div`
  margin: 20px 0px;
  font-size: 20px;
`;
const Price = styled.div`
  font-weight: 100;
  font-size: 50px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 5px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 8px;
  margin-left: 5px;
  outline: none;
`;
const FilterSizeOption = styled.option`
  font-size: 15px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 5px;
`;
const Amount = styled.span`
  font-size: 20px;
  margin: 0 5px;
  width: 30px;
  height: 30px;
  border-radius: 12px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: disabled;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 500;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  ${mobile({fontSize: "10px"})}
  &:hover {
    background-color: blue;
  }
`;
const Product = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Announcement />
        <Warpper>
          <ImgContainer>
            <Image src="https://i.pinimg.com/564x/2e/c2/4e/2ec24e62ccee189c4d9910bca70e53fb.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Stylish Girl Rompers</Title>
            <Desc>
              Comfy and cozy lazy girl outfits for those of us that hate taking
              time to get ready! These easy outfits are polished, super cute and
              require minimal effort! We've got lots to cover today. Clogs.
              Overalls. Instagram Stories. And a little more about my style
              shift. It's basically going to be a lightning round catch up sesh.
            </Desc>
            <Price>50 $</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color:</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterTitle>Size:</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Warpper>
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};

export default Product;
