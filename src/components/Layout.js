import React from "react";
import NavigationContainer from "./NavigationContainer";
import { useState } from "react";

const Layout = () => {
  //   state = {
  //     mesaj1: "Ati selectat butonul de success",
  //     mesaj2: "Ati selectat butonul de danger",
  //     mesaj3: "Ati selectat butonul de warning",
  //   };
  const [buton1, setButon1] = useState(" ");
  const buton1Click = () => {
    setButon1("Ati selectat butonul de success");
  };
  const [buton2, setButon2] = useState(" ");
  const buton2Click = () => {
    setButon2("Ati selectat butonul de danger");
  };
  const [buton3, setButon3] = useState(" ");
  const buton3Click = () => {
    setButon3("Ati selectat butonul de warning");
  };

  return (
    <div className={"border border-light rounded m-2 p-5 container"}>
      <p style={{ color: "green" }}>{buton1}</p>
      <p style={{ color: "red" }}>{buton2}</p>
      <p style={{ color: "yellow" }}>{buton3}</p>
      <NavigationContainer
        callbackFunction={buton1Click}
        callbackFunction2={buton2Click}
        callbackFunction3={buton3Click}
      />
    </div>
  );
};

export default Layout;
