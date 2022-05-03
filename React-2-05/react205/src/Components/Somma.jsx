import { useState } from "react";

import BottoneSomma from "./BottoneSomma";
import Risultato from "./Risultato";
const Somma = ({ numero }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(5);
  const [risultato, setRisultato] = useState(0);
  const somma = () => {
    setRisultato(numero + num2);
  };

  return (
    <div>
      <div>
        Il risultato è:
        <Risultato risultato={risultato} />
      </div>
      <BottoneSomma action={somma} num1={num1} num2={num2} />
    </div>
  );
};

export default Somma;
