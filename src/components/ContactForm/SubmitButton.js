import React from "react";
import { Check } from "react-feather";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Transition } from "react-spring/renderprops";

function SubmitButtion({ submit }) {
  return (
    <Transition
      items={submit}
      from={{
        transform: "translate3d(0,60px,0)",
        opacity: 0,
      }}
      enter={{ transform: "translate3d(0,0,0)", opacity: 1 }}
      leave={{
        position: "absolute",
        transform: "translate3d(60px,0,0)",
        opacity: 0,
      }}
    >
      {(submit) =>
        submit
          ? (props) => (
              <Alert style={props} variant="success">
                Message Sent <Check size={18} />
              </Alert>
            )
          : (props) => (
              <Button style={props} variant="primary" type="submit">
                Submit
              </Button>
            )
      }
    </Transition>
  );
}

export default SubmitButtion;
