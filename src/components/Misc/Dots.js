import React from "react";
import { useSpring, animated } from "react-spring";

function Dots(props) {
  const spring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
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
  };

  return <animated.div style={{ ...style, ...spring }} />;
}

export default Dots;
