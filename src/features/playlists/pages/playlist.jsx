// src/features/playlists/pages/Playlist.jsx

import { useParams } from "react-router-dom";

function Playlist() {

  const { id } = useParams();

  return (
    <div>

      <h1>
        Playlist Page
      </h1>

      <p>
        Playlist ID: {id}
      </p>

    </div>
  );

}

export default Playlist;