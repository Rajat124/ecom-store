import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Row className="bg-dark" style={{ height: "8rem", width: "100%" }}>
        <Col>
          <h1 style={{ margin: "auto", fontSize: "60px", color: "white" }}>
            The Generics
          </h1>
        </Col>
        <Col lg="2">
          <Image src="#" thumbnail />
        </Col>
        <Col lg="2">
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col lg="2">
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </>
  );
};

export default Footer;
