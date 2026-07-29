// src/features/auth/pages/Login.jsx
import SpotifyLogin from "../components/SpotifyLogin";


function Login() {

  return (

    <div>

      <h1>
        Welcome to muSync
      </h1>

      <p>
        Connect your Spotify account
      </p>

      <SpotifyLogin />

    </div>

  );
}

export default Login;