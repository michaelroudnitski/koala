import React, { useState } from "react";
import SectionHeader from "../Misc/SectionHeader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div>
      <SectionHeader title="Contact Me" />
      <Form onSubmit={handleSubmit}>
        <Form.Row className="justify-content-between">
          <Form.Group className="col-md-4 col-12">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="col-md-8 col-12">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="jdoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
