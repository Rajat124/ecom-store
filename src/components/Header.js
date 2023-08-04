import React from "react";
import { Badge, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/Context";
import CartPro from "./CartPro";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const {
    state: { cart },
  } = CartContext();

  return (
    <>
      <Navbar style={{ backgroundColor: "#e6e5e5" }} data-bs-theme="light">
        <Container className="d-flex justify-content-around font-weight-bolder">
          <Nav style={{ fontSize: "1.2rem" }}>
            <NavLink to="/header">Home</NavLink>
            <NavLink to="/store">Store</NavLink>
            <NavLink to="/AboutUs">About Us</NavLink>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              <FaShoppingCart color="white" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ height: "40rem", minWidth: 450, left: "-69px" }}
            >
              <CartPro></CartPro>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
      <div
        className="bg-dark d-flex justify-content-center"
        style={{ height: "7rem", width: "100%" }}
      >
        <h1 style={{ margin: "auto", fontSize: "60px", color: "white" }}>
          The Generics
        </h1>
      </div>
    </>
  );
};

export default Header;
