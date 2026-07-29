import { useEffect, useState } from "react";

import { useAuth } from "../../../context/AuthContext";

import {

  getHero,

  getFeaturedPlaylists,

  getNewReleases,

  getPopularArtists,

  getRecentlyPlayed,

  getRecommendations,

} from "../services/homeService";


function useHome() {

  const { accessToken } = useAuth();

  const [hero, setHero] = useState(null);

  const [featuredAlbums, setFeaturedAlbums] = useState([]);

  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  const [popularArtists, setPopularArtists] = useState([]);

  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  const [recommendations, setRecommendations] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  useEffect(() => {

    async function loadHome() {

      try {

        setLoading(true);

        // Mock data
        setHero(getHero());

        setPopularArtists(getPopularArtists());

        setRecentlyPlayed(getRecentlyPlayed());

        setRecommendations(getRecommendations());


        if (accessToken) {

          const [

            playlists,

            albums,

          ] = await Promise.all([

            getFeaturedPlaylists(accessToken),

            getNewReleases(accessToken),

          ]);


          setFeaturedPlaylists(playlists);

          setFeaturedAlbums(albums);

        }

      } catch (err) {

        console.error(err);

        setError(err);

      } finally {

        setLoading(false);

      }

    }

    loadHome();

  }, [accessToken]);


  return {

    hero,

    featuredAlbums,

    featuredPlaylists,

    popularArtists,

    recentlyPlayed,

    recommendations,

    loading,

    error,

  };

}

export default useHome;