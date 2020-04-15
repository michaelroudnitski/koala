import React from "react";

import "./Hero.scss";
import meImg from "../../assets/me.png";
import Socials from "../Misc/Socials";

function Hero() {
  return (
    <div className="col">
      <h1 className="display-4 d-inline">Michael</h1>
      <br />
      <h1 className="display-4 d-inline highlight">Roudnitski</h1>
      <h6 className="text-muted">Software Engineer | Toronto, Canada</h6>
      <Socials />
      <img
        id="me-img"
        className="my-5 my-md-4 d-block d-md-inline ml-auto"
        src={meImg}
        alt="me on a canoe"
      />
    </div>
  );
}

export default Hero;
