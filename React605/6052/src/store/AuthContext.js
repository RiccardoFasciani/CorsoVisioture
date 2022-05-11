import React, { useState } from "react";

const AuthContext = React.createContext({
  user: "",
  token: "",
  isAuthenticated: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState("");

  const manageUser = (user, token, authB) => {
    setUser(user);
    setToken(token);
    setIsAuthenticated(authB);
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
export default AuthContext;
