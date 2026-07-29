// src/context/AuthContext.jsx

import {
  createContext,
  useContext,
  useState
} from "react";


const AuthContext = createContext(null);



export function AuthProvider({ children }) {


  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("spotify_token")
  );


  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("spotify_user");
    return stored ? JSON.parse(stored) : null;
  });



  function login(token, userData) {


    localStorage.setItem(
      "spotify_token",
      token
    );


    localStorage.setItem(
      "spotify_user",
      JSON.stringify(userData)
    );


    setAccessToken(token);

    setUser(userData);

  }



  function logout() {


    localStorage.removeItem(
      "spotify_token"
    );


    localStorage.removeItem(
      "spotify_user"
    );


    setAccessToken(null);

    setUser(null);

  }



  return (

    <AuthContext.Provider

      value={{

        accessToken,

        user,

        login,

        logout,

        isAuthenticated: Boolean(accessToken)

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}



export function useAuth(){

  return useContext(AuthContext);

}