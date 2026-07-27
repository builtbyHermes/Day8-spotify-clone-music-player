// src/routes/AppRoutes.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../features/home/pages/Home";
import Search from "../features/search/pages/Search";
import Album from "../features/albums/pages/Album";
import Artist from "../features/artists/pages/Artist";
import Playlist from "../features/playlists/pages/Playlist";
import Library from "../features/library/pages/Library";
import LikedSongs from "../features/likedSongs/pages/LikedSongs";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/search" element={<Search />} />

          <Route path="/album/:albumId" element={<Album />} />

          <Route path="/artist/:artistId" element={<Artist />} />

          <Route path="/playlist/:playlistId" element={<Playlist />} />

          <Route path="/library" element={<Library />} />

          <Route path="/liked" element={<LikedSongs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;