import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/Context";
import CartPro from "./CartPro";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./context/Context";

const Header = () => {
  const {
    state: { cart },
  } = CartContext();

  const authCtx = AuthContext();
  console.log(authCtx);

  return (
    <>
      <Navbar style={{ backgroundColor: "black" }} data-bs-theme="light">
        <Navbar.Brand
          className="d-flex justify-content-center"
          style={{ height: "3rem" }}
        >
          <NavLink to="/home">Ecom Store</NavLink>
        </Navbar.Brand>
        <Container className="d-flex justify-content-end font-weight-bolder">
          <Nav style={{ fontSize: "1.2rem" }}>
            <NavLink to="/home">Home</NavLink>
            {authCtx.isUserLoggedIn && <NavLink to="/product">Store</NavLink>}

            <NavLink to="/contactUs">Contact US </NavLink>
            <NavLink to="/AboutUs">About Us</NavLink>
          </Nav>
          {!authCtx.isUserLoggedIn ? (
            <NavLink to="/auth">
              <Button style={{ margin: "0px 0px 0px 6rem" }}>Login</Button>
            </NavLink>
          ) : (
            <Button style={{ margin: "0px 0px 0px 6rem" }} onClick={() => {}}>
              LogOut
            </Button>
          )}

          <Dropdown style={{ margin: "0px 4rem 0px 1rem" }}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              <FaShoppingCart color="white" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ height: "35rem", minWidth: 450, left: "-19rem" }}
            >
              <CartPro></CartPro>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
