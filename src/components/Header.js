import React from "react";
import { Badge, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/Context";
import CartPro from "./CartPro";

const Header = () => {
  const {
    state: { cart },
  } = CartContext();

  return (
    <>
      <Navbar style={{ backgroundColor: "#e6e5e5" }} data-bs-theme="light">
        <Container className="d-flex justify-content-around font-weight-bolder">
          <Nav style={{ fontSize: "1.2rem" }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
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
      <div
        className="bg-light d-flex justify-content-center p-2 font-monospace"
        style={{ height: "5rem", width: "100%" }}
      >
        <h1 style={{ margin: "auto", fontSize: "30px", color: "black" }}>
          Music
        </h1>
      </div>
    </>
  );
};

export default Header;
