const BASE_URL =
 "https://api.spotify.com/v1";



async function spotifyRequest(
 endpoint,
 token
){


 const response =
 await fetch(
   `${BASE_URL}${endpoint}`,
   {

    headers:{
      Authorization:
      `Bearer ${token}`
    }

   }
 );



 if(!response.ok){


   const error =
   await response.json();


   console.error(
     "Spotify API Error:",
     error
   );


   throw new Error(
    "Spotify request failed"
   );

 }


 return response.json();


}


export default spotifyRequest;