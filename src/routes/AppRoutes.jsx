import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import ProtectedRoute from "./ProtectedRoute";


// Pages from features

import Home from "../features/home/pages/Home";
import Search from "../features/search/pages/Search";
import Library from "../features/library/pages/Library";
import Album from "../features/albums/pages/Album";
import Playlist from "../features/playlists/pages/Playlist";


// Auth pages

import Login from "../features/auth/pages/Login";
import Callback from "../features/auth/pages/Callback";


function AppRoutes() {

  return (

    <Routes>

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Spotify Callback */}

      <Route
        path="/callback"
        element={<Callback />}
      />



      {/* Protected Application Routes */}

      <Route

        path="/"

        element={

          <ProtectedRoute>

            <MainLayout />

          </ProtectedRoute>

        }

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