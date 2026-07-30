// src/features/auth/pages/Callback.jsx

import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {exchangeCodeForToken} from "../../../services/spotifyAuth";
import {useAuth} from "../../../context/AuthContext";
import Login from "./Login";


function Callback(){

  const navigate = useNavigate();

  const {login} = useAuth();

  useEffect(()=>{

     async function authenticate(){

  console.log("Callback started");


  const params =
    new URLSearchParams(
      window.location.search
    );


  const code =
    params.get("code");


  console.log("Spotify code:", code);


  if(!code){
    console.log("No code found");
    return;
  }


  try {

    console.log("Exchanging code...");


    const tokenData =
      await exchangeCodeForToken(code);


    console.log(
      "Token response:",
      tokenData
    );


    const accessToken =
      tokenData.access_token;



    console.log(
      "Saving token..."
    );


    login(
      accessToken,
     null
    );


    console.log(
      "Logged in, navigating..."
    );


    navigate("/");


  }

  catch(error){

    console.error(
      "AUTH ERROR:",
      error
    );

  }

}


    authenticate();


  },[]);




  return (

    <div>

      Connecting Spotify...
      
      
    </div>

  );

}


export default Callback;