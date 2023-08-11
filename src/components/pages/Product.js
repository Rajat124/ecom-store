import React, { useCallback, useEffect } from "react";
import { Row, Button, Card, Col } from "react-bootstrap";
import { CartContext } from "../../context/Context";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Context";
import CartPro from "../CartPro";

const Product = () => {
  const { state, dispatch } = CartContext();

  const authCtx = AuthContext();
  const id = authCtx.email;
  console.log(id);

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
          Music
        </h1>
      </div>
      <Row xs={1} md={4} className="g-4">
        {productsArr.map((item) => (
          <Col key={item.id}>
            <Card>
              <Link to={`/product/${item.id}`}>
                <Card.Img variant="top" src={item.imageUrl} />
              </Link>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Row md={2}>
                  <Card.Text>RS.{item.price}</Card.Text>
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
