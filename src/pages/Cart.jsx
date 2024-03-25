import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;
const Warpper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 40px;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopText = styled.span`
  cursor: pointer;
  text-decoration: underline;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
`;
const Info = styled.span`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductId = styled.div``;
const ProductSize = styled.div``;
const ProductPrice = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin: 5px;
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
`;

const Sammry = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
`;
const SummrayTitle = styled.h1`
  font-weight: 200;
  margin: 5px;
`;
const SummrayItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryText = styled.span``;
const SummaryPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 10px;
`;

const Cart = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Announcement />
        <Warpper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <Image src="https://i.pinimg.com/564x/2e/c2/4e/2ec24e62ccee189c4d9910bca70e53fb.jpg" />
                <ProductDetails>
                  <Details>
                    <ProductName>
                      <b>Product: </b>Stylish Girl Rompers
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>56465345798
                    </ProductId>
                    <ProductColor color="darkblue" />

                    <ProductSize>
                      <b>Size: </b>M
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <ProductPrice>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <Price>$55</Price>
                </ProductPrice>
              </Product>
              <Hr />
              <Product>
                <Image src="data:image/jpeg;base64,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" />
                <ProductDetails>
                  <Details>
                    <ProductName>
                      <b>Product: </b>Shoes
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>5646539329
                    </ProductId>
                    <ProductColor color=" rgb(38, 53, 84)" />

                    <ProductSize>
                      <b>Size: </b>38.5
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <ProductPrice>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>1</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <Price>$90</Price>
                </ProductPrice>
              </Product>
              <Hr />
            </Info>
            <Sammry>
              <SummrayTitle>ORDER SUMMARY</SummrayTitle>
              <SummrayItem>
                <SummaryText>Subtotal</SummaryText>
                <SummaryPrice>$145</SummaryPrice>
              </SummrayItem>
              <SummrayItem>
                <SummaryText>Estimated Shipping</SummaryText>
                <SummaryPrice>$5.5</SummaryPrice>
              </SummrayItem>
              <SummrayItem>
                <SummaryText>Shipping Discount</SummaryText>
                <SummaryPrice>$5.9</SummaryPrice>
              </SummrayItem>
              <SummrayItem type="total">
                <SummaryText>Total</SummaryText>
                <SummaryPrice>$150</SummaryPrice>
              </SummrayItem>
              <Button>CHECKOUT NOW</Button>
            </Sammry>
          </Bottom>
        </Warpper>
        <Footer />
      </Container>
    </>
  );
};

export default Cart;
