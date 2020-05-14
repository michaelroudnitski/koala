import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

import "./WebNavbar.scss";

function WebNavbar() {
  return (
    <Navbar className="px-0 px-sm-3">
      <LinkContainer to="/">
        <Navbar.Brand>MR</Navbar.Brand>
      </LinkContainer>
      <Nav className="ml-auto">
        <LinkContainer to="/blog">
          <Nav.Link>
            <Button>Blog</Button>
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default WebNavbar;
