import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  let isAuthenticated = false;
  const toggleAuth = () => {
    isAuthenticated = !isAuthenticated;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
