// src/features/auth/components/SpotifyLogin.jsx

import {
  getSpotifyLoginUrl
} from "../../../services/spotifyAuth";


function SpotifyLogin() {


  function handleLogin() {

    const loginUrl =
      getSpotifyLoginUrl();


    window.location.href = loginUrl;

  }



  return (

    <button
      onClick={handleLogin}
    >

      Login with Spotify

    </button>

  );

}


export default SpotifyLogin;