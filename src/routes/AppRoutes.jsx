import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// Pages from features

import Home from "../features/home/pages/Home";
import Search from "../features/search/pages/Search";
import Library from "../features/library/pages/Library";
import Album from "../features/albums/pages/Album";
import Playlist from "../features/playlists/pages/Playlist";


function AppRoutes() {

  return (

    <Routes>

      <Route
        path="/"
        element={<MainLayout />}
      >

        {/* Home */}

        <Route
          index
          element={<Home />}
        />

        {/* Search */}

        <Route
          path="search"
          element={<Search />}
        />

        {/* Library */}

        <Route
          path="library"
          element={<Library />}
        />

        {/* Album */}

        <Route
          path="album/:id"
          element={<Album />}
        />

        {/* Playlist */}

        <Route
          path="playlist/:id"
          element={<Playlist />}
        />

      </Route>

    </Routes>
  );
}


export default AppRoutes;