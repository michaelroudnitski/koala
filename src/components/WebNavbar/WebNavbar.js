import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./WebNavbar.scss";

function WebNavbar() {
  return (
    <Navbar>
      <Navbar.Brand href="/">MR</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link to="/blog">Blog</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default WebNavbar;
