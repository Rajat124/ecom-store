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
import { CartContext } from "../../context/Context";
import CartPro from "./CartPro";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AContext";

const Header = () => {
  const {
    state: { cart },
  } = CartContext();

  const authCtx = AuthContext();

  return (
    <Navbar
      style={{ backgroundColor: "black", height: "5rem" }}
      data-bs-theme="light"
      variant="dark"
    >
      <Navbar.Brand
        className="d-flex justify-content-center"
        style={{ color: "white", margin: "auto 5rem", fontSize: "2rem" }}
      >
        Ecom Store
      </Navbar.Brand>
      <Container className="d-flex justify-content-end font-weight-bolder">
        <Nav style={{ fontSize: "1.2rem" }}>
          <NavLink
            to="/home"
            style={{
              textDecoration: "none",
              color: "white",
              margin: "auto 8px",
            }}
          >
            Home
          </NavLink>
          {authCtx.isUserLoggedIn && (
            <NavLink
              to="/product"
              style={{
                textDecoration: "none",
                color: "white",
                margin: "auto 8px",
              }}
            >
              Store
            </NavLink>
          )}
          <NavLink
            to="/contactUs"
            style={{
              textDecoration: "none",
              color: "white",
              margin: "auto 8px",
            }}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/AboutUs"
            style={{
              textDecoration: "none",
              color: "white",
              margin: "auto 8px",
            }}
          >
            About Us
          </NavLink>
        </Nav>
        {!authCtx.isUserLoggedIn ? (
          <NavLink to="/auth">
            <Button style={{ margin: "0px 0px 0px 6rem" }}>Login</Button>
          </NavLink>
        ) : (
          <a href="/auth">
            <Button
              style={{ margin: "0px 0px 0px 6rem" }}
              onClick={() => {
                authCtx.logout();
              }}
            >
              LogOut
            </Button>
          </a>
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
  );
};

export default Header;
