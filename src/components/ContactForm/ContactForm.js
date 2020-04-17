import React from "react";
import SectionHeader from "../Misc/SectionHeader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  return (
    <div>
      <SectionHeader title="Contact Me" />
      <Form>
        <Form.Row className="justify-content-between">
          <Form.Group className="col-md-4 col-12">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="John Doe" />
          </Form.Group>
          <Form.Group className="col-md-8 col-12">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="jdoe@gmail.com" />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
