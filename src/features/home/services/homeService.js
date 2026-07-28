// src/features/home/services/homeService.js

import {
  hero,
  featuredAlbums,
  featuredPlaylists,
  popularArtists,
  recentlyPlayed,
  recommendations,
} from "../data/homeData";

export function getHero() {
  return hero;
}

export function getFeaturedAlbums() {
  return featuredAlbums;
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