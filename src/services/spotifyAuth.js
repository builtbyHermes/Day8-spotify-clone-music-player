// src/services/spotifyAuth.js


const CLIENT_ID =
  "e1cdf9a64e9140f6b369c47030f6b70d";


const REDIRECT_URI =
  "http://127.0.0.1:5173/callback";


const AUTH_ENDPOINT =
  "https://accounts.spotify.com/authorize";



// Permissions your app requests

const SCOPES = [
  "user-read-private",
  "user-read-email",
];


// =====================================
// Generate Spotify Login URL
// =====================================

export function getSpotifyLoginUrl(){


  const params =
    new URLSearchParams({

      client_id: CLIENT_ID,

      response_type: "code",

      redirect_uri: REDIRECT_URI,

      scope: SCOPES.join(" "),


    });



  return `${AUTH_ENDPOINT}?${params.toString()}`;

}





// =====================================
// Exchange Authorization Code
// =====================================
//
// IMPORTANT:
// The actual exchange happens on backend
// because it requires CLIENT_SECRET.
//
// React only sends the code.
//

export async function exchangeCodeForToken(code){


  const response =
    await fetch(

      "http://localhost:4000/api/auth/token",

      {

        method:"POST",


        headers:{

          "Content-Type":
          "application/json",

        },


        body:JSON.stringify({

          code,

        }),

      }

    );




  if(!response.ok){


    const error =
      await response.json();


    console.error(
      "Token exchange error:",
      error
    );


    throw new Error(
      "Failed to exchange Spotify code"
    );


  }




  return response.json();


}