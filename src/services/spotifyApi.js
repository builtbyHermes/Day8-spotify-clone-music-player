// src/services/spotifyApi.js


const BASE_URL = "https://api.spotify.com/v1";


async function spotifyRequest(endpoint, token) {


  console.log(
    "Spotify endpoint:",
    endpoint
  );


  console.log(
    "TOKEN SENT:",
    token
  );



  const response = await fetch(

    `${BASE_URL}${endpoint}`,

    {

      headers: {

        Authorization:
          `Bearer ${token}`,

      },

    }

  );



  console.log(
    "Spotify response status:",
    response.status
  );



  if (!response.ok) {


    const errorText =
      await response.text();



    console.error(

      "Spotify API ERROR:",

      errorText

    );


    throw new Error(
      "Spotify API request failed"
    );

  }



  return response.json();

}



export default spotifyRequest;