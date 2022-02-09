import React from "react";
import { Card, Button } from "react-bootstrap";

const CardContainer = (props) => {
  const { items, name, callhandleClick } = props;
  return (
    <div className={"col-3 mb-4"}>
      <Card style={{ width: "13rem", height: "12rem" }}>
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {name && name.nume}{" "}
          </Card.Title>
          <Card.Text style={{ color: "black" }}>
            {name && name.description}
          </Card.Text>
          <Button
            onClick={() => {
              callhandleClick(name.nume);
            }}
            variant="primary"
            style={{ color: "white" }}
          >
            {name && name.nume}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardContainer;
