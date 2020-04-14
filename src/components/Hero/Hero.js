import React from "react";

import "./Hero.scss";
import { GitHub, Linkedin } from "react-feather";
import meImg from "../../assets/me.png";

function Hero() {
  return (
    <div className="col">
      <h1 className="display-4 d-inline">Michael</h1>
      <br />
      <h1 className="display-4 d-inline highlight">Roudnitski</h1>
      <h6 className="text-muted">Software Engineer | Toronto, Canada</h6>
      <div className="row mx-0">
        <GitHub href="https://github.com/michaelroudnitski" className="mr-2" />
        <Linkedin className="mx-2" />
      </div>
      <img className="my-3" src={meImg} alt="me on a boat" />
    </div>
  );
}

export default Hero;
