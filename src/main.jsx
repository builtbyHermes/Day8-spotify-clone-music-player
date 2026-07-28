import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { PlayerProvider } from "./features/player/context/PlayerContext";
import { AuthProvider } from "./context/AuthContext";


ReactDOM
.createRoot(document.getElementById("root"))
.render(

  <AuthProvider>

    <PlayerProvider>

      <App />

    </PlayerProvider>

  </AuthProvider>

);