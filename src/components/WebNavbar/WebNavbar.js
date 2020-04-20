import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

import "./WebNavbar.scss";

function WebNavbar() {
  return (
    <Navbar>
      <Navbar.Brand href="/">MR</Navbar.Brand>
      {/* <Nav className="ml-auto">
        <Nav.Link href="#home">My Work</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
      </Nav> */}
    </Navbar>
  );
}

export default WebNavbar;
