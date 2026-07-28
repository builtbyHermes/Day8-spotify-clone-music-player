// src/services/spotifyUser.js


import spotifyRequest from "./spotifyApi";


export function getCurrentUser(token){


  return spotifyRequest(
    "/me",
    token
  );


}