import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";

const Home = () => {
  const list = [
    {
      date: "JUL16",
      city: "DETROIT,MI",
      place: "DTE-ENERGY-MUSIC-THEATRE",
    },
    {
      date: "JUL19",
      city: "TORONTO,ON",
      place: "BUDWEISER STAGE",
    },
    {
      date: "JUL22",
      city: "BRISTOW,VA",
      place: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL29",
      city: "PHOENIX,AZ",
      place: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      city: "LAS VEGAS,NV",
      place: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      city: "CONCORD,CA",
      place: "CONCORD PAVILION",
    },
  ];

  return (
    <div>
      <div className="bg-dark " style={{ height: "10rem", width: "100%" }}>
        <Row md={2} className="justify-content-md-center">
          <Button
            style={{
              margin: "2rem 0 5px 5px",
              width: 300,
              fontSize: "20px",
              background: "transparent",
            }}
          >
            Get on Latest Album
          </Button>
        </Row>
        <Row md={2} className="justify-content-md-center">
          <Button
            style={{ width: 300, fontSize: "20px", background: "transparent" }}
          >
            <AiFillPlayCircle />
          </Button>
        </Row>
      </div>
      <div
        className="bg-light d-flex justify-content-center p-2 font-monospace"
        style={{ height: "5rem", width: "100%" }}
      >
        <h1 style={{ margin: "auto", fontSize: "30px", color: "black" }}>
          Tours
        </h1>
      </div>
      <ListGroup style={{ width: "50rem", margin: "20px auto 40px auto" }}>
        {list.map((item, i) => (
          <ListGroup.Item key={i}>
            <Row>
              <Col>{item.date}</Col>
              <Col>{item.city}</Col>
              <Col>{item.place}</Col>
              <Col>
                <Button>Buy Tickets</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Home;
