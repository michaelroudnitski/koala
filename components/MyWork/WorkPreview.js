import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [(y - 300) / 40, -(x - 300) / 60, 1.1];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function WorkPreview(props) {
  const [anim, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 100 },
  }));

  return (
    <div
      className="p-4"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
    >
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <animated.img
          className="border rounded"
          src={props.img}
          style={{ transform: anim.xys.interpolate(trans) }}
          alt="Project Preview"
        />
      </a>
    </div>
  );
}

export default WorkPreview;
