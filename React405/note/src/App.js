import "./App.css";
import Card from "./Components/Card";
import { useState, useRef } from "react";
function App() {
  const inputData = useRef();
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
        data: inputData.current.value,
      },
    ]);
  };
  const editNota = (event) => {
    event.preventDefault();
    setNote([...note.filter((nota) => nota.id != onfocus)]);
    setNote((prevState) => [
      ...prevState,
      {
        titolo: inputTitolo.current.value,
        nota: inputNota.current.value,
        id: onfocus,
        data: inputData.current.value,
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
        <br />
        <label>
          Inserisci data della nota
          <br />
          <input type="date" ref={inputData} />
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
        <div>
          <Card id={onfocus} chiudifocus={chiudifocus} obj={note} />
          <button onClick={editNota}>Modifica nota</button>
        </div>
      )}
    </div>
  );
}

export default App;
