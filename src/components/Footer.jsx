import {
  Copyright,
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: rgba(237, 237, 237, 0.912);
  ${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  font-size: 50px;
`;
const Desc = styled.span`
  font-size: 20px;
  font-weight: 300;
`;
const SocialContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-around;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  font-size: 30px;
`;
const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
  width: 50%;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Right = styled.div`
  padding: 20px;
  flex: 1;
`;
const ContactItem = styled.div`
  margin: 20px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Payment = styled.img`
  width: 80%;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>TRO...STROE</Logo>
          <Desc>
            Tro...Stroe is a method of buying and selling goods and services
            online. The definition of ecommerce business can also include
            tactics like affiliate marketing. You can use ecommerce channels
            such as your own website, an established selling website like
            Amazon, or social media to drive online sales.
          </Desc>
          <SocialContainer>
            <SocialIcon color="#3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="#34405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="#55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="#E60023">
              <Pinterest />
            </SocialIcon>
            <SocialIcon color="darkblue">
              <LinkedIn />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>UseFul Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Trems</ListItem>
            <ListItem>About Us</ListItem>
          </List>
          <Desc
            style={{
              fontSize: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Copyright style={{ fontSize: 15 }} /> Tro...Stroe corporation 2024
            Trems & Policy
          </Desc>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> 71,72 Dixis path, Londen UK{" "}
          </ContactItem>
          <ContactItem>
            <Mail style={{ marginRight: "10px" }} /> trostroe@.com{" "}
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +1 235 47 89
          </ContactItem>
          <Payment src="https://thumbs.dreamstime.com/b/delhi-india-february-popular-credit-card-companies-logos-including-mastercard-visa-american-express-more-211749084.jpg" />
        </Right>
      </Container>
    </>
  );
};

export default Footer;
