// src/features/home/hooks/useHome.js

import {
  useEffect,
  useState,
} from "react";


import { useAuth } from "../../../context/AuthContext";


import {
  getHero,
  getFeaturedPlaylists,
  getNewReleases,
} from "../services/homeService";



function useHome() {


  const {
    accessToken
  } = useAuth();



  const [hero, setHero] = useState(null);


  const [
    featuredPlaylists,
    setFeaturedPlaylists
  ] = useState([]);



  const [
    newReleases,
    setNewReleases
  ] = useState([]);



  const [
    loading,
    setLoading
  ] = useState(true);



  const [
    error,
    setError
  ] = useState(null);




  useEffect(() => {


    async function loadHome(){


      try {


        setLoading(true);



        // Local hero

        setHero(
          getHero()
        );



        if(!accessToken){

          return;

        }



        const [

          playlists,

          albums

        ] = await Promise.all([


          getFeaturedPlaylists(
            accessToken
          ),


          getNewReleases(
            accessToken
          )


        ]);



        setFeaturedPlaylists(
          playlists
        );


        setNewReleases(
          albums
        );



      } catch(err){


        console.error(
          err
        );


        setError(err);


      } finally {


        setLoading(false);

      }


    }



    loadHome();


  }, [accessToken]);




  return {


    hero,

    featuredPlaylists,

    newReleases,

    loading,

    error,


  };

}



export default useHome;