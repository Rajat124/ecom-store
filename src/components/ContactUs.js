import React, { useState } from "react";
import { Button, Form, FormControl, FormLabel } from "react-bootstrap";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dataSubmit = (e) => {
    console.log(name);
    e.preventDefault();

    let ObjData = {
      name: name,
      email: email,
      phone: phone,
    };

    console.log(ObjData);

    fetch("https://datafetcheapp-default-rtdb.firebaseio.com/report.json", {
      method: "POST",
      body: JSON.stringify(ObjData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Form onSubmit={dataSubmit}>
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
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default ContactUs;
