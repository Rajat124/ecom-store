import React, { useContext, useState } from "react";
// import { useHistory } from "react-router-dom";

const Auth = React.createContext();

export const AuthContext = () => {
  return useContext(Auth);
};

const AContext = (props) => {
  const intialtokenValue = localStorage.getItem("token");
  const [token, setToken] = useState(intialtokenValue);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  let contextValue = {
    token: token,
    isUserLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <Auth.Provider value={contextValue}>{props.children}</Auth.Provider>;
};

export default AContext;
