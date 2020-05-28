import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";

function Socials() {
  return (
    <div className="row mx-0 d-block">
      <a href="https://github.com/michaelroudnitski">
        <GitHub className="mr-2" />
      </a>
      <a href="https://twitter.com/mroudnitski">
        <Twitter className="mx-2" />
      </a>
      <a href="https://linkedin.com/in/michael-roudnitski">
        <Linkedin className="mx-2" />
      </a>
    </div>
  );
}

export default Socials;