import { useRef, useState } from "react";
const Filterone = (props) => {
  const [input, setInput] = useState("");
  const inputHanlde = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input onChange={inputHanlde} />
      {props.diario
        .filter((obj) => obj.name.toUpperCase().includes(input.toUpperCase()))
        .map((obj) => (
          <h1 key={obj.id}>{obj.name}</h1>
        ))}
    </div>
  );
};
export default Filterone;
