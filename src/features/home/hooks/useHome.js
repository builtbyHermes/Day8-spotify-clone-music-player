// src/features/home/hooks/useHome.js

import { useEffect, useState } from "react";

import { useAuth } from "../../../context/AuthContext";

import {

  getHero,

  getFeaturedAlbums,

  getFeaturedPlaylists,

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

        // Local (mock) data
        setHero(getHero());

        setPopularArtists(getPopularArtists());

        setRecommendations(getRecommendations());


        if (accessToken) {

          const [

            albums,

            playlists,

            recentTracks,

          ] = await Promise.all([

            getFeaturedAlbums(accessToken),

            getFeaturedPlaylists(accessToken),

            getRecentlyPlayed(accessToken),

          ]);


          setFeaturedAlbums(albums);

          setFeaturedPlaylists(playlists);

          setRecentlyPlayed(recentTracks);

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