import React from "react";
import { Row, Button, Card, Col } from "react-bootstrap";
import { CartContext } from "../../context/Context";
import { Link } from "react-router-dom";
import Rating from "./Filter/Rating";

let id = localStorage.getItem("id");

const Product = () => {
  const { state, dispatch, products } = CartContext();
  // console.log(state.products, state.cart);

  // const productsArr = [
  //   {
  //     title: "Colors",
  //     price: 99.99,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  //     id: 1,
  //   },

  //   {
  //     title: "Black",
  //     price: 49.99,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  //     id: 2,
  //   },

  //   {
  //     title: "Yellow ",
  //     price: 69.99,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  //     id: 3,
  //   },

  //   {
  //     title: "Blue Color",
  //     price: 99.99,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  //     id: 4,
  //   },
  // ];

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
      <div
        className="bg-light d-flex justify-content-center p-2 font-monospace"
        style={{ height: "5rem", width: "100%" }}
      >
        <h1 style={{ margin: "auto", fontSize: "30px", color: "black" }}>
          Products
        </h1>
      </div>
      <Row xs={1} md={4} className="g-4">
        {products.map((item) => (
          <Col key={item.id}>
            <Card style={{ width: "15rem" }}>
              <Link to={`/product/${item.id}`}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "15rem", padding: "8px" }}
                />
              </Link>
              <Card.Body>
                <Card.Title>{item.title.slice(0, 18)}...</Card.Title>
                <Card.Subtitle style={{ paddingBottom: 10 }}>
                  <span>₹ {Math.floor(item.price)}/-</span>
                  <Rating rating={item.rating.rate} />
                </Card.Subtitle>
                <Row md={2}>
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
        ))}
      </Row>
    </div>
  );

  return (
    <div>
      {prodArr}
      <div
        className="d-flex justify-content-center"
        style={{ height: "6rem", width: "100%" }}
      >
        <Button className="m-lg-4">See the Cart</Button>
      </div>
    </div>
  );
};

export default Product;
