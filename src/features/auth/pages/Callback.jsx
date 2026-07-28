// src/features/auth/pages/Callback.jsx

import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {exchangeCodeForToken} from "../../../services/spotifyAuth";
import {getCurrentUser} from "../../../services/spotifyUser";
import {useAuth} from "../../../context/AuthContext";


function Callback(){

  const navigate = useNavigate();

  const {login} = useAuth();

  useEffect(()=>{

    async function authenticate(){


      const params =
        new URLSearchParams(
          window.location.search
        );



      const code =
        params.get("code");

      if(!code){
        return;
      }

      try{
     // 1. Get access token

        const tokenData =
          await exchangeCodeForToken(code);

        const accessToken =
          tokenData.access_token;

        // 2. Get user profile

        const user =
          await getCurrentUser(
            accessToken
          );


        // 3. Save authentication

        login(
          accessToken,
          user
        );




        // 4. Go to app

        navigate("/");


      }
      catch(error){

        console.error(
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