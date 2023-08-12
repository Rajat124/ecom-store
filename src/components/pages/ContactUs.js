import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const dataSubmit = (e) => {
    console.log(name);
    e.preventDefault();

    let ObjData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    fetch("https://auth-app-ff8fe-default-rtdb.firebaseio.com/report.json", {
      method: "POST",
      body: JSON.stringify(ObjData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Container>
      <div className="pb-4 card-body">
        <div
          className="bg-light d-flex justify-content-center p-2 font-monospace"
          style={{ height: "5rem", width: "100%" }}
        >
          <h1 style={{ margin: "auto", fontSize: "30px", color: "black" }}>
            Get In Touch
          </h1>
        </div>
        <Form onSubmit={dataSubmit}>
          <FormGroup className="mb-3">
            <FormLabel>Name</FormLabel>
            <FormControl
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></FormControl>
            <FormLabel>Email Id</FormLabel>
            <FormControl
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></FormControl>
            <FormLabel>Phone Number</FormLabel>
            <FormControl
              type="number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></FormControl>
            <FormLabel>Message</FormLabel>
            <FormControl
              as="textarea"
              rows={8}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></FormControl>
            <Button type="submit">Submit</Button>
          </FormGroup>
        </Form>
      </div>
    </Container>
  );
};

export default ContactUs;
