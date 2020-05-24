import React, { useState } from "react";
import SectionHeader from "../Misc/SectionHeader";
import Form from "react-bootstrap/Form";
import SubmitButtion from "./SubmitButton";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
        setSubmit(true);
      })
      .catch((error) => alert(error));
    e.preventDefault();
  };

  return (
    <div>
      <SectionHeader title="Contact Me 👋" />
      <Form onSubmit={handleSubmit}>
        <Form.Row className="justify-content-between">
          <Form.Group className="col-md-4 col-12">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={submit}
              required
            />
          </Form.Group>
          <Form.Group className="col-md-8 col-12">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="jdoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submit}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={submit}
            required
          />
        </Form.Group>
        <SubmitButtion submit={submit} />
      </Form>
    </div>
  );
}

export default ContactForm;
