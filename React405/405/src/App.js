import "./App.css";
import { useEffect, useState } from "react";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Home from "./Components/Home";
function App() {
  const [page, setPage] = useState(1);
  const [bckgr, setBckgr] = useState(0);
  const goContacts = () => {
    setPage(2);
  };
  const goAbout = () => {
    setPage(3);
  };
  const goHome = () => {
    setPage(1);
  };
  useEffect(() => {
    if (bckgr <= 2) {
      setBckgr(bckgr + 1);
    } else {
      setBckgr(1);
    }
  }, [page]);
  return (
    <div
      style={{
        border: `${
          bckgr == 1 ? "red" : bckgr == 2 ? "blue" : "green"
        } solid 3px`,
      }}
    >
      <div>
        {page == 1 ? (
          <Home />
        ) : page == 3 ? (
          <About />
        ) : page == 2 ? (
          <Contacts />
        ) : (
          <Home />
        )}
      </div>
      <div>
        <button onClick={goHome}>Home</button>
        <button onClick={goContacts}>Contacts</button>
        <button onClick={goAbout}>About</button>
      </div>
    </div>
  );
}

export default App;
