// src/features/home/components/PlaylistGrid/PlaylistGrid.jsx

import PlaylistCard from "../PlaylistCard/PlaylistCard";
import styles from "./PlaylistGrid.module.css";

function PlaylistGrid({ playlists = [] }) {
  return (
    <div className={styles.grid}>
      {playlists.map((playlist) => (
        <PlaylistCard
          key={playlist.id}
          playlist={playlist}
        />
      ))}
    </div>
  );
}

export default PlaylistGrid;