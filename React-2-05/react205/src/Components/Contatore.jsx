import { useState } from "react";
import Somma from "./Somma";

const Contatore = () => {
  const [contatore, setContatore] = useState(0);
  const increment = () => {
    setContatore((prevState) => prevState + 1);
  };
  const decrement = () => {
    setContatore((prevState) => prevState - 1);
  };
  return (
    <>
      <div>Contatore={contatore}</div>

      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <Somma numero={contatore}></Somma>
    </>
  );
};
export default Contatore;
