import React from "react";
import { GitHub, Linkedin } from "react-feather";

function Socials() {
  return (
    <div className="row mx-0">
      <a href="https://github.com/michaelroudnitski">
        <GitHub className="mr-2" />
      </a>
      <a href="https://linkedin.com/in/michael-roudnitski">
        <Linkedin className="mx-2" />
      </a>
    </div>
  );
}

export default Socials;
