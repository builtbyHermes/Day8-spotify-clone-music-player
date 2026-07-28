// src/services/spotifyApi.js

const BASE_URL = "https://api.spotify.com/v1";


async function spotifyRequest(endpoint, token) {

  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


  if (!response.ok) {
    throw new Error(
      "Spotify API request failed"
    );
  }


  return response.json();
}


export default spotifyRequest;