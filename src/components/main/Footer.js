import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Row style={{ backgroundColor: "black", height: "8rem" }}>
        <Col style={{ backgroundColor: "black", height: "8rem" }}>
          <h1
            style={{
              margin: "2rem 2rem 1rem",
              fontSize: "60px",
              color: "white",
            }}
          >
            The Generics
          </h1>
        </Col>
        <Col>
          <AiOutlineInstagram />
        </Col>
      </Row>
    </>
  );
};

export default Footer;
