// src/services/spotifyBrowse.js

import spotifyRequest from "./spotifyApi";


// ============================
// Featured Playlists
// ============================

export function getFeaturedPlaylists() {

  return spotifyRequest(
    "/browse/featured-playlists?limit=10"
  );

}


// ============================
// New Releases
// ============================

export function getNewReleases() {

  return spotifyRequest(
    "/browse/new-releases?limit=10"
  );

}


// ============================
// Browse Categories
// ============================

export function getCategories() {

  return spotifyRequest(
    "/browse/categories?limit=20"
  );

}


// ============================
// Search
// ============================

export function searchSpotify(query) {

  return spotifyRequest(

    `/search?q=${encodeURIComponent(query)}&type=album,artist,playlist&limit=20`

  );

}


// ============================
// Album
// ============================

export function getAlbum(id) {

  return spotifyRequest(
    `/albums/${id}`
  );

}


// ============================
// Artist
// ============================

export function getArtist(id) {

  return spotifyRequest(
    `/artists/${id}`
  );

}


// ============================
// Playlist
// ============================

export function getPlaylist(id) {

  return spotifyRequest(
    `/playlists/${id}`
  );

}