import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;
const Warpper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  ${mobile({ padding: "10px 0px" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 20px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid lightgray;
  margin-left: 20px;
  padding: 5px;
  border-radius: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })};
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
  color: black;
  text-decoration: none;
  ${mobile({ fontSize: "20px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })};
`;
const ManuList = styled.div`
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
  ${mobile({ fontSize: "10px", marginRight: "10px" })};
`;
const Navbar = () => {
  return (
    <>
      <Container>
        <Warpper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ fontSize: "16px", color: "gray" }} />
            </SearchContainer>
          </Left>
          <Center>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <Logo>TRO...STORE</Logo>
            </Link>
          </Center>
          <Right>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ManuList>Register</ManuList>
            </Link>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ManuList>Login</ManuList>
            </Link>
            <ManuList>
              <Link
                to={"/cart"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Badge color="success" badgeContent={9}>
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            </ManuList>
          </Right>
        </Warpper>
      </Container>
    </>
  );
};

export default Navbar;
