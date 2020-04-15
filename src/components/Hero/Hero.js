import React from "react";
import { GitHub, Linkedin } from "react-feather";

import "./Hero.scss";
import meImg from "../../assets/me.png";

function Hero() {
  return (
    <div className="col">
      <h1 className="display-4 d-inline">Michael</h1>
      <br />
      <h1 className="display-4 d-inline highlight">Roudnitski</h1>
      <h6 className="text-muted">Software Engineer | Toronto, Canada</h6>
      <div className="row mx-0">
        <a href="https://github.com/michaelroudnitski">
          <GitHub className="mr-2" />
        </a>
        <a href="https://linkedin.com/in/michael-roudnitski">
          <Linkedin className="mx-2" />
        </a>
      </div>
      <img className="my-3" src={meImg} alt="me on a boat" />
    </div>
  );
}

export default Hero;
