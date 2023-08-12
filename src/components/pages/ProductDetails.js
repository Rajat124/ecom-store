import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const param = useParams();

  console.log(param.productId);

  const productsArr = [
    {
      title: "Colors",
      price: 99.99,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      id: 1,
    },

    {
      title: "Black",
      price: 49.99,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      id: 2,
    },

    {
      title: "Yellow ",
      price: 69.99,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      id: 3,
    },

    {
      title: "Blue Color",
      price: 99.99,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      id: 4,
    },
  ];

  const prodata = productsArr.filter((ele) => ele.id === param.productId / 1);

  console.log(prodata);

  return (
    <div>
      {prodata.map((item) => (
        <Row xs={1} md={3} className="g-4" key={item.id}>
          <Col>
            <Card>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Button variant="primary">Add TO Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>RS.{item.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ProductDetails;
