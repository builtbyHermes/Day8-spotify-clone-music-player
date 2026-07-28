// src/utils/spotifyMapper.js

export function mapPlaylist(playlist) {

  return {

    id: playlist.id,

    title: playlist.name,

    description: playlist.description,

    cover: playlist.images?.[0]?.url ?? "",

    owner: playlist.owner?.display_name ?? ""

  };

}



export function mapAlbum(album) {

  return {

    id: album.id,

    title: album.name,

    artist: album.artists
      ?.map(artist => artist.name)
      .join(", "),

    cover: album.images?.[0]?.url ?? ""

  };

}



export function mapArtist(artist) {

  return {

    id: artist.id,

    name: artist.name,

    image: artist.images?.[0]?.url ?? ""

  };

}



export function mapTrack(track) {

  return {

    id: track.id,

    title: track.name,

    artist: track.artists
      ?.map(artist => artist.name)
      .join(", "),

    cover: track.album?.images?.[0]?.url ?? "",

    duration: track.duration_ms

  };

}