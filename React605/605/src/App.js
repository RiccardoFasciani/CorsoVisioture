import "./App.css";
import { useEffect, useState, useRef } from "react";
import useHttp from "./Hooks/useHttp";
import Crea from "./Crea";

function App() {
  const [diario, setDiario] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();
  const [click, setClick] = useState(0);
  const inputNome = useRef();

  useEffect(() => {
    sendRequest({
      url: "https://6274d214345e1821b22ffdd8.mockapi.io/Task/",
      manageData: (res) => {
        setDiario(res);
      },
    });
  }, []);

  return (
    <div>
      <Crea />
      {diario.map((obj) => {
        return <h1 key={obj.id}>{obj.name}</h1>;
      })}
    </div>
  );
}

export default App;
