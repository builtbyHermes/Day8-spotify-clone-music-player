// src/features/home/services/homeService.js

import { hero } from "../data/homeData";

import spotifyRequest from "../../../services/spotifyApi";

import {
  mapPlaylist,
  mapAlbum,
} from "../../../utils/spotifyMapper";


// Hero (keep local)

export function getHero() {
  return hero;
}


// Featured Playlists (Spotify)

export async function getFeaturedPlaylists(token) {

  const data = await spotifyRequest(
    "/browse/featured-playlists",
    token
  );

  return data.playlists.items.map(mapPlaylist);

}


// New Releases (Spotify)

export async function getNewReleases(token) {

  const data = await spotifyRequest(
    "/browse/new-releases",
    token
  );

  return data.albums.items.map(mapAlbum);

}