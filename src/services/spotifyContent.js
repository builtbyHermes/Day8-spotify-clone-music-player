// src/services/spotifyContent.js


import spotifyRequest from "./spotifyApi";

import {
  mapAlbum,
  mapArtist,
  mapTrack,
} from "../utils/spotifyMapper";



// ==============================
// SEARCH
// ==============================

export async function searchSpotify(
  query,
  type,
  token
){

  const data =
    await spotifyRequest(
      `/search?q=${query}&type=${type}`,
      token
    );


  return data;

}



// ==============================
// SEARCH ALBUMS
// ==============================

export async function searchAlbums(
  query,
  token
){

  const data =
    await searchSpotify(
      query,
      "album",
      token
    );


  return data.albums.items.map(
    mapAlbum
  );

}



// ==============================
// SEARCH ARTISTS
// ==============================

export async function searchArtists(
  query,
  token
){

  const data =
    await searchSpotify(
      query,
      "artist",
      token
    );


  return data.artists.items.map(
    mapArtist
  );

}



// ==============================
// SEARCH TRACKS
// ==============================

export async function searchTracks(
  query,
  token
){

  const data =
    await searchSpotify(
      query,
      "track",
      token
    );


  return data.tracks.items.map(
    mapTrack
  );

}