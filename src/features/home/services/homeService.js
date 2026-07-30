// src/features/home/services/homeService.js


import {
  hero,
} from "../data/homeData";


import spotifyRequest from "../../../services/spotifyApi";


import {
  mapPlaylist,
  mapAlbum,
} from "../../../utils/spotifyMapper";



// ========================================
// Local UI Data
// ========================================

export function getHero() {

  return hero;

}



// ========================================
// Spotify Data
// ========================================


export async function getFeaturedPlaylists(token) {


  const data = await spotifyRequest(

    "/browse/featured-playlists",

    token

  );


  return data.playlists.items.map(

    mapPlaylist

  );

}




export async function getNewReleases(token) {


  const data = await spotifyRequest(

    "/browse/new-releases",

    token

  );


  return data.albums.items.map(

    mapAlbum

  );

}