import React from "react";

function Dots(props) {
  const style = {
    backgroundSize: "20px 20px",
    backgroundImage: `radial-gradient(${
      props.color || "#f2f2f2"
    } 3.5px, transparent 0)`,
    position: "absolute",
    left: props.left,
    right: props.right,
    top: props.top,
    bottom: props.bottom,
    width: props.width || 140,
    height: props.height || 200,
    zIndex: -5,
  };

  return <div style={style} />;
}

export default Dots;
