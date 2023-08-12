import React, { useContext, useEffect, useState } from "react";

const Auth = React.createContext();

export const AuthContext = () => {
  return useContext(Auth);
};

const AContext = (props) => {
  const intialtokenValue = localStorage.getItem("token");
  const [token, setToken] = useState(intialtokenValue);

  useEffect(() => {
    localStorage.getItem("id");
  }, []);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    localStorage.setItem("token", token);
    let id = email.replace(/[@.]/g, "");
    localStorage.setItem("id", id);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("id");
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
