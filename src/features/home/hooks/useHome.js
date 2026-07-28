// src/features/home/hooks/useHome.js

import { useEffect, useState } from "react";

import {
  getHero,
  getFeaturedAlbums,
  getFeaturedPlaylists,
  getPopularArtists,
  getRecentlyPlayed,
  getRecommendations,
} from "../services/homeService";

function useHome() {
  const [hero, setHero] = useState(null);

  const [featuredAlbums, setFeaturedAlbums] = useState([]);

  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  const [popularArtists, setPopularArtists] = useState([]);

  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  const [recommendations, setRecommendations] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setHero(getHero());

      setFeaturedAlbums(getFeaturedAlbums());

      setFeaturedPlaylists(getFeaturedPlaylists());

      setPopularArtists(getPopularArtists());

      setRecentlyPlayed(getRecentlyPlayed());

      setRecommendations(getRecommendations());
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

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