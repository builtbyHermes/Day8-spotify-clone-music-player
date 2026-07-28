// src/features/home/services/homeService.js

import {
  hero,
  featuredPlaylists,
  popularArtists,
  recentlyPlayed,
  recommendations,
} from "../data/homeData";
import spotifyRequest from "../../../services/spotifyApi";


export function getHero() {
  return hero;
}

export async function getFeaturedAlbums(token){

  const data = await spotifyRequest(
    "/browse/featured-playlists",
    token
  );


  return data;
}

export function getFeaturedPlaylists() {
  return featuredPlaylists;
}

export function getPopularArtists() {
  return popularArtists;
}

export function getRecentlyPlayed() {
  return recentlyPlayed;
}

export function getRecommendations() {
  return recommendations;
}