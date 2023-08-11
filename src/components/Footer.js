import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Row style={{ backgroundColor: "black", height: "8rem", width: "100%" }}>
        <Col>
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
      </Row>
    </>
  );
};

export default Footer;
