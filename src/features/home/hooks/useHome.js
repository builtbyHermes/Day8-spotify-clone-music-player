// src/features/home/hooks/useHome.js

import {
  useEffect,
  useState,
} from "react";


import {
  getHero,
  getFeaturedPlaylists,
  getNewReleases,
} from "../services/homeService";



function useHome() {


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


    async function loadHome() {


      try {


        setLoading(true);



        // Local hero data

        setHero(
          getHero()
        );




        // Public Spotify catalog data

        const [

          playlists,

          albums

        ] = await Promise.all([


          getFeaturedPlaylists(),


          getNewReleases()


        ]);





        setFeaturedPlaylists(

          playlists

        );



        setNewReleases(

          albums

        );





      } catch (err) {


        console.error(
          "Home loading error:",
          err
        );


        setError(err);



      } finally {


        setLoading(false);


      }


    }



    loadHome();



  }, []);






  return {


    hero,

    featuredPlaylists,

    newReleases,

    loading,

    error,


  };


}



export default useHome;