// src/context/AuthContext.jsx

import {
  createContext,
  useContext,
  useState,
} from "react";


const AuthContext = createContext(null);



export function AuthProvider({ children }) {

  const [accessToken, setAccessToken] = useState(null);

  const [user, setUser] = useState(null);



  function login(token) {

    setAccessToken(token);

  }



  function logout() {

    setAccessToken(null);

    setUser(null);

  }



  const value = {
    accessToken,
    user,
    login,
    logout,
    isAuthenticated: Boolean(accessToken),
  };


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}



export function useAuth() {

  const context = useContext(AuthContext);


  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }


  return context;
}