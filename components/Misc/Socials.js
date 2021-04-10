import React from "react";
import { GitHub, Linkedin, Twitter, Book } from "react-feather";

function Socials() {
  return (
    <div className="row mx-0 d-block">
      <a href="https://dev.to/mroudnitski" title="Blog">
        <Book className="mx-2" />
      </a>
      <a href="https://github.com/michaelroudnitski" title="GitHub">
        <GitHub className="mr-2" />
      </a>
      <a href="https://twitter.com/mroudnitski" title="Twitter">
        <Twitter className="mx-2" />
      </a>
      <a href="https://linkedin.com/in/michael-roudnitski" title="LinkedIn">
        <Linkedin className="mx-2" />
      </a>
    </div>
  );
}

export default Socials;
