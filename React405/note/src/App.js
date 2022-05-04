import "./App.css";
import Card from "./Components/Card";
import { useState, useRef } from "react";
function App() {
  const inputNota = useRef();
  const inputTitolo = useRef();
  const [note, setNote] = useState([]);
  const [id, setId] = useState(1);
  const [onfocus, setOnfocus] = useState(0);
  const chiudifocus = () => {
    setOnfocus(0);
  };
  const creaNota = (event) => {
    event.preventDefault();
    setId(id + 1);
    setNote((prevState) => [
      ...prevState,
      {
        titolo: inputTitolo.current.value,
        nota: inputNota.current.value,
        id: id,
      },
    ]);
  };
  return (
    <div>
      <form onSubmit={creaNota} action="">
        <label htmlFor="">
          Inserisci Titolo Nota
          <br />
          <input type="text" ref={inputTitolo} />
        </label>
        <label htmlFor="">
          <br />
          Inserisci Testo Nota
          <br />
          <input type="text" ref={inputNota} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {!onfocus &&
        note.map((nota) => {
          return (
            <h1
              onClick={() => {
                setOnfocus(nota.id);
              }}
              key={nota.id}
            >
              {nota.titolo}
            </h1>
          );
        })}
      {onfocus != 0 && (
        <Card id={onfocus} chiudifocus={chiudifocus} obj={note} />
      )}
    </div>
  );
}

export default App;
