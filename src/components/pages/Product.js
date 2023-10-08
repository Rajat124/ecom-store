import React from "react";
import { Row, Button, Card, Col } from "react-bootstrap";
import { CartContext } from "../../context/Context";
import { Link } from "react-router-dom";
import Rating from "./Filter/Rating";

let id = localStorage.getItem("id");

const Product = ({ item }) => {
  const { state, dispatch } = CartContext();

  const dataStoring = async (obj) => {
    const existingItem = state.cart.findIndex((ele) => ele.id === obj.id);

    if (existingItem === -1) {
      try {
        await fetch(
          `https://auth-app-ff8fe-default-rtdb.firebaseio.com/${id}.json`,
          {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const prodArr = (
    <div className="container">
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card style={{ width: "17rem" }}>
            <Link to={`/product/${item.id}`}>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "14rem", padding: "10px" }}
              />
            </Link>
            <Card.Body>
              <Card.Title>{item.title.slice(0, 18)}...</Card.Title>
              <Card.Subtitle style={{ paddingBottom: 10 }}>
                <div>₹ {Math.floor(item.price)}/-</div>
                <Rating rating={item.rating.rate} />
                <div>
                  {item.price >= 80 ? "Fast Delivery" : "No Fast Delivery"}
                </div>
                <div>Stock: {Math.floor(item.rating.count)} Units Only</div>
              </Card.Subtitle>
              <Row>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: item });
                    dataStoring(item);
                  }}
                >
                  Add TO Cart
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );

  return <div>{prodArr}</div>;
};

export default Product;
