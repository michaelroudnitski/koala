// import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import style from "./WebNavbar.module.scss";

function WebNavbar() {
  return (
    <div className="px-0 px-sm-3">
      <Navbar className={style.navbar}>
        <Navbar.Brand>
          <a className="text-dark" href="/">
            MR
          </a>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default WebNavbar;
