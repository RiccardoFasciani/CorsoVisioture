import { useContext } from "react";
import AuthContext from "./store/AuthContext";
const Navbar = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <button
        onClick={() => {
          authCtx.manageUser("", "", true);
        }}
      >
        Login
      </button>
      {authCtx.isAuthenticated && <h1>BENVENUTO</h1> && (
        <button
          onClick={() => {
            authCtx.manageUser("", "", false);
          }}
        >
          MO VATTENE
        </button>
      )}
    </>
  );
};
export default Navbar;
