import React from "react";
import { Button } from "react-bootstrap";

const ButtonsContainer = (props) => {
  const { callbackFunction, callbackFunction2, callbackFunction3 } = props;
  return (
    <div>
      <Button onClick={callbackFunction} variant="success">
        Success
      </Button>{" "}
      <Button onClick={callbackFunction2} variant="danger">
        Danger
      </Button>{" "}
      <Button onClick={callbackFunction3} variant="warning">
        Warning
      </Button>{" "}
    </div>
  );
};

export default ButtonsContainer;
