import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/Context";

const ProductDetails = () => {
  const param = useParams();
  const { products } = CartContext();

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

  const prodata = products.filter((ele) => ele.id === param.productId / 1);

  console.log(prodata);

  return (
    <div>
      {prodata.map((item) => (
        <Row md={4} className="g-4" key={item.id}>
          <Col>
            <Card style={{ width: "17rem", margin: "5px 4px 5rem 40px" }}>
              <Card.Img variant="top" src={item.image} />
            </Card>
          </Col>
          <Col>
            <Card style={{ margin: "5px 2px 3rem 40px" }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>RS.{item.price}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary">Buy Now</Button>
                <Button variant="primary">Add TO Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ProductDetails;
