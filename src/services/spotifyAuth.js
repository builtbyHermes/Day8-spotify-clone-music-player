// src/services/spotifyAuth.js


const CLIENT_ID = "e1cdf9a64e9140f6b369c47030f6b70d";

const REDIRECT_URI = "http://127.0.0.1:5173/callback";


const AUTH_ENDPOINT =
  "https://accounts.spotify.com/authorize";


const SCOPES = [
  "user-read-private",
  "user-read-email",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
];


export function getSpotifyLoginUrl() {

  const params = new URLSearchParams({

    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: SCOPES.join(" "),

  });


  return `${AUTH_ENDPOINT}?${params.toString()}`;

}


export async function exchangeCodeForToken(code) {

  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams({

        grant_type: "authorization_code",

        code,

        redirect_uri: REDIRECT_URI,

        client_id: CLIENT_ID,

      }),
    }
  );


  if (!response.ok) {

    throw new Error(
      "Failed to get Spotify token"
    );

  }


  return response.json();

}