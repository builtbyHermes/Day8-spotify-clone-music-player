// src/features/home/components/AlbumGrid/AlbumGrid.jsx

import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./AlbumGrid.module.css";

function AlbumGrid({ albums = [] }) {
  return (
    <div className={styles.grid}>
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
        />
      ))}
    </div>
  );
}

export default AlbumGrid;