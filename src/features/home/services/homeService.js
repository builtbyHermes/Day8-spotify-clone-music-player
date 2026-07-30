// src/features/home/services/homeService.js

import {
  hero,
} from "../data/homeData";


import {
  mapAlbum,
  mapPlaylist,
} from "../../../utils/spotifyMapper";



const API_URL = "http://localhost:4000/api/spotify";



// ========================================
// Local Hero
// ========================================

export function getHero(){

  return hero;

}



// ========================================
// Featured Playlists
// ========================================

export async function getFeaturedPlaylists(){


  const response =
    await fetch(
      `${API_URL}/featured-playlists`
    );


  if(!response.ok){

    throw new Error(
      "Failed to load playlists"
    );

  }


  const data =
    await response.json();



  return data.playlists.items.map(
    mapPlaylist
  );


}



// ========================================
// New Releases
// ========================================

export async function getNewReleases(){


  const response =
    await fetch(
      `${API_URL}/new-releases`
    );


  if(!response.ok){

    throw new Error(
      "Failed to load albums"
    );

  }


  const data =
    await response.json();



  return data.albums.items.map(
    mapAlbum
  );


}