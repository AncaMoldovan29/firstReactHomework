import React from "react";
import CardContainer from "./CardContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonsContainer from "./ButtonsContainer";
import { useState } from "react";

const NavigationContainer = (props) => {
  const { callbackFunction, callbackFunction2, callbackFunction3, name } =
    props;
  const [mesaj, setMesaj] = useState("");

  const items = [
    { nume: "Produs 1", description: "random description 1" },
    { nume: "Produs 2", description: "random description 2" },
    { nume: "Produs 3", description: "random description 3" },
    { nume: "Produs 4", description: "random description 4" },
    { nume: "Produs 5", description: "random description 5" },
    { nume: "Produs 6", description: "random description 6" },
    { nume: "Produs 7", description: "random description 7" },
    { nume: "Produs 8", description: "random description 8" },
    { nume: "Produs 9", description: "random description 9" },
    { nume: "Produs 10", description: "random description 10" },
  ];
  const handleClick = (nume) => {
    setMesaj("Itemul selectat este : " + nume);
  };
  return (
    <>
      <div
        className={
          "row justify-content-evenly border border-light rounded p-3 m-3 mb-4"
        }
      >
        <div className={"col-12"}>
          <p style={{ color: "white" }}>{mesaj}</p>
        </div>
        {items.map((name) => (
          <CardContainer callhandleClick={handleClick} name={name} />
        ))}
      </div>
      <div className={"border border-light rounded p-4"}>
        <ButtonsContainer
          callbackFunction={callbackFunction}
          callbackFunction2={callbackFunction2}
          callbackFunction3={callbackFunction3}
        />
      </div>
    </>
  );
};

export default NavigationContainer;
