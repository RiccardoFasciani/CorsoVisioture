import { useState } from "react";

const AuthContext = React.createContext({
  user: "",
  token: "",
  isAuthenticated: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState("");

  const manageUser = (user, token) => {
    setUser(user);
    setToken(token);
    setIsAuthenticated(true);
  };

  const contextValue = {
    user,
    token,
    isAuthenticated,
    manageUser,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
