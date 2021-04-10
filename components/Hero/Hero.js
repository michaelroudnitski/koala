import React from "react";

import Socials from "../Misc/Socials";

function Hero() {
  return (
    <div className="col">
      <h1 className="display-4 d-inline">Michael</h1>
      <br />
      <h1 className="display-4 d-inline highlight">Roudnitski</h1>
      <h6 className="text-muted">Software Engineer | Toronto, Canada</h6>
      <Socials />
    </div>
  );
}

export default Hero;
