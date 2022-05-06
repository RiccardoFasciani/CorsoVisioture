import useHttp from "./Hooks/useHttp";
import { useRef } from "react";
const Crea = () => {
  const inputNome = useRef();
  const {
    isLoading: isOnloading,
    error: errore,
    sendRequest: mandaRichiesta,
  } = useHttp();

  const inserimento = (e) => {
    e.preventDefault();

    mandaRichiesta({
      bodyH: { name: inputNome.current.value },
      methodH: "POST",
      url: "https://6274d214345e1821b22ffdd8.mockapi.io/Task/",
      manageData: (res) => {
        console.log(res);
      },
    });
  };
  return (
    <>
      <form onSubmit={inserimento}>
        <label>Inserisci il nome</label>
        <input ref={inputNome}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
};
export default Crea;
