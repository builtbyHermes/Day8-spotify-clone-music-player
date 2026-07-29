// src/features/home/services/homeService.js

import {
  hero,
  popularArtists,
  recentlyPlayed,
  recommendations,
} from "../data/homeData";

import spotifyRequest from "../../../services/spotifyApi";

import {
  mapPlaylist,
  mapAlbum,
  mapRecentlyPlayed,
} from "../../../utils/spotifyMapper";

// ========================================
// Local (Mock) Data
// ========================================

export function getHero() {
  return hero;
}

export function getPopularArtists() {
  return popularArtists;
}

export function getRecommendations() {
  return recommendations;
}


// ========================================
// Spotify API Data
// ========================================

export async function getFeaturedPlaylists(token) {

  const data = await spotifyRequest(
    "/browse/featured-playlists",
    token
  );

  return data.playlists.items.map(mapPlaylist);

}


export async function getFeaturedAlbums(token) {

  const data = await spotifyRequest(
    "/browse/new-releases",
    token
  );

  return data.albums.items.map(mapAlbum);

}

export async function getRecentlyPlayed(token) {

  const data = await spotifyRequest(
    "/me/player/recently-played?limit=10",
    token
  );

  return data.items.map(mapRecentlyPlayed);

}