import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const app = express();


app.use(cors());

app.use(express.json());



app.post(
  "/api/auth/token",
  async(req,res)=>{


    const {code}=req.body;


    try{


      const response =
        await fetch(
          "https://accounts.spotify.com/api/token",
          {
            method:"POST",

            headers:{
              "Content-Type":
              "application/x-www-form-urlencoded"
            },


            body:new URLSearchParams({

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



    }catch(error){


      res.status(500)
      .json({
        error:error.message
      });


    }


  }
);



app.listen(
 4000,
 ()=>{
  console.log(
   "Server running on port 4000"
  )
 }
);