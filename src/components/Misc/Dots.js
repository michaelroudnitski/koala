import React from "react";

import "./Dots.scss";

function Dots(props) {
  const style = {
    left: props.left,
  };

  return <div style={style} className="background-dot-grid"></div>;
}

export default Dots;
