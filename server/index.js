// server/index.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const app = express();



app.use(cors());

app.use(express.json());




// =====================================
// AUTHORIZATION CODE EXCHANGE
// React Callback.jsx uses this
// =====================================

app.post(
  "/api/auth/token",
  async (req, res) => {


    const { code } = req.body;



    try {


      const response =
        await fetch(
          "https://accounts.spotify.com/api/token",
          {

            method: "POST",


            headers: {

              "Content-Type":
              "application/x-www-form-urlencoded"

            },


            body: new URLSearchParams({

              grant_type:
              "authorization_code",


              code,


              redirect_uri:
              process.env.REDIRECT_URI,


              client_id:
              process.env.SPOTIFY_CLIENT_ID,


              client_secret:
              process.env.SPOTIFY_CLIENT_SECRET,


            })

          }
        );



      const data =
        await response.json();



      res.json(data);



    } catch (error) {


      res.status(500)
      .json({

        error:
        error.message

      });


    }


  }
);







// =====================================
// GET SPOTIFY APP TOKEN
// Client Credentials Flow
// Used for public Spotify data
// =====================================


async function getSpotifyAppToken(){


  const clientId =
    process.env.SPOTIFY_CLIENT_ID;


  const clientSecret =
    process.env.SPOTIFY_CLIENT_SECRET;



  const encodedCredentials =
    Buffer
      .from(
        `${clientId}:${clientSecret}`
      )
      .toString("base64");



  const response =
    await fetch(
      "https://accounts.spotify.com/api/token",
      {


        method:"POST",


        headers:{


          Authorization:
          `Basic ${encodedCredentials}`,


          "Content-Type":
          "application/x-www-form-urlencoded"


        },


        body:new URLSearchParams({


          grant_type:
          "client_credentials"


        })


      }
    );



  const data =
    await response.json();




  if(!response.ok){


    console.log(
      "Spotify App Token Error:",
      data
    );


    throw new Error(
      "Could not get Spotify app token"
    );


  }



  return data.access_token;


}









// =====================================
// FEATURED PLAYLISTS
// Public endpoint
// =====================================


app.get(
  "/api/spotify/featured-playlists",
  async(req,res)=>{


    try{


      const token =
        await getSpotifyAppToken();



      const response =
        await fetch(

          "https://api.spotify.com/v1/browse/featured-playlists",

          {


            headers:{


              Authorization:
              `Bearer ${token}`


            }


          }

        );



      const data =
        await response.json();




      if(!response.ok){


        throw new Error(
          data.error?.message ||
          "Spotify request failed"
        );


      }



      res.json(data);



    }catch(error){


      console.error(error);


      res.status(500)
      .json({

        error:
        error.message

      });


    }


  }
);









// =====================================
// NEW RELEASES
// Public endpoint
// =====================================


app.get(
  "/api/spotify/new-releases",
  async(req,res)=>{


    try{


      const token =
        await getSpotifyAppToken();



      const response =
        await fetch(

          "https://api.spotify.com/v1/browse/new-releases",

          {


            headers:{


              Authorization:
              `Bearer ${token}`


            }


          }

        );



      const data =
        await response.json();




      if(!response.ok){


        throw new Error(
          data.error?.message ||
          "Spotify request failed"
        );


      }



      res.json(data);



    }catch(error){


      console.error(error);


      res.status(500)
      .json({

        error:
        error.message

      });


    }


  }
);








// =====================================
// SERVER START
// =====================================


app.listen(
 4000,
 ()=>{
   console.log(
    "Server running on port 4000"
   );
 }
);