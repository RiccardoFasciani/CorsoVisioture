import "./App.css";
import { useEffect, useState, useRef } from "react";
import useHttp from "./Hooks/useHttp";
import Crea from "./Crea";
import Filterone from "./Filterone";

function App() {
  const [diario, setDiario] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

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
      <Filterone diario={diario} />
    </div>
  );
}

export default App;
