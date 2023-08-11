import React, { useCallback, useEffect } from "react";
import { CartContext } from "../context/Context";
import {
  Col,
  FormControl,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
  Button,
} from "react-bootstrap";
import { AuthContext } from "./context/Context";

const CartPro = () => {
  const {
    state: { cart, totalValue },
    dispatch,
  } = CartContext();

  const authCtx = AuthContext();
  const id = authCtx.email;
  console.log(id);

  const fetchmethod = useCallback(async () => {
    let cartitem = [];
    try {
      const res = await fetch(
        `https://auth-app-ff8fe-default-rtdb.firebaseio.com/${id}.json`
      );

      const data = await res.json();

      for (const key in data) {
        cartitem.push({
          id: data[key].id,
          imageUrl: data[key].imageUrl,
          price: data[key].price,
          title: data[key].title,
        });
      }
      console.log(cartitem);
    } catch (error) {
      console.log(error.message);
    }
    dispatch({ type: "USER_REFRESHED", payload: cartitem });
  }, []);

  useEffect(() => {
    fetchmethod();
  }, [fetchmethod]);

  return (
    <div>
      <ListGroup>
        <Row style={{ fontSize: "25px", margin: "6px 0px 0px 22px" }}>
          <Col>Item</Col>
          <Col>Price</Col>
          <Col>Quantity</Col>
        </Row>
        <br></br>
        {cart.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col md={2}>
                <Image
                  src={item.imageUrl}
                  fluid
                  roundedCircle
                  // width="60px"
                ></Image>
              </Col>
              <Col md={2}>
                <span>{item.title}</span>
              </Col>
              <Col md={3}>Rs.{item.price}</Col>
              <Col md={2}>
                <FormControl
                  onChange={(e) => {
                    dispatch({
                      type: "CHANGING_ITEM_QTY",
                      payload: { item: item, qty: e.target.value },
                    });
                  }}
                ></FormControl>
              </Col>
              <Col md={2}>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: item });
                  }}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
        <Row style={{ fontSize: "20px", margin: "21px 0px 30px 14rem" }}>
          <Col
            style={{
              fontSize: "30px",
              fontWeight: 700,
              margin: "-10px 0px 0px 0rem",
            }}
          >
            Total
          </Col>
          <Col>Rs.{totalValue.toFixed(2)}</Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="success">Purchase</Button>
          </Col>
        </Row>
      </ListGroup>
    </div>
  );
};

export default CartPro;
