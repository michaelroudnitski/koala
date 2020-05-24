import React from "react";
import { Check } from "react-feather";
import { useTransition, animated } from "react-spring";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function SubmitButtion({ submit }) {
  const transitions = useTransition(submit, null, {
    from: {
      transform: "translate3d(0,60px,0)",
      opacity: 0,
    },
    enter: { transform: "translate3d(0,0,0)", opacity: 1 },
    leave: {
      position: "absolute",
      transform: "translate3d(60px,0,0)",
      opacity: 0,
    },
  });

  return transitions.map(({ item, key, props }) =>
    item ? (
      <animated.div key={key} style={props}>
        <Alert style={props} variant="success">
          Message Sent <Check size={18} />
        </Alert>
      </animated.div>
    ) : (
      <animated.div key={key} style={props}>
        <Button style={props} variant="primary" type="submit">
          Submit
        </Button>
      </animated.div>
    )
  );
}

export default SubmitButtion;
