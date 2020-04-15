import React from "react";

import Media from "react-bootstrap/Media";

function Resume({ title, years, logoUrl }) {
  return (
    <Media className="col">
      <img
        width={128}
        height={128}
        className="mr-3"
        src={logoUrl}
        alt={title + " logo"}
      />
      <Media.Body className="my-auto">
        <h5>{title}</h5>
        <p>{years}</p>
      </Media.Body>
    </Media>
  );
}

export default Resume;
