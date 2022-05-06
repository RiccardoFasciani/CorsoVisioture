import "./App.css";
import Somma from "./Components/Somma";
import React, { useState } from "react";

function App() {
  const [isclicked, setIsClicked] = useState(0);

  const cliccato = () => {
    setIsClicked(1);
  };
  const togli = (e: any) => {
    setIsClicked(0);
    return "";
  };
  // let a:inter = {i.d:'cioa'};
  return (
    <div>
      <button onClick={cliccato}>BOTTONE</button>
      {isclicked == 1 && <Somma togli={togli} a={10} b={8} />}
    </div>
  );
}

export default App;
