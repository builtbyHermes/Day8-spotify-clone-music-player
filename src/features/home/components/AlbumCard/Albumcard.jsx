// src/features/home/components/AlbumCard/AlbumCard.jsx

import styles from "./AlbumCard.module.css";

function AlbumCard({ album }) {
  return (
    <article className={styles.card}>

      <div className={styles.cover}>
        <img
          src={album.cover}
          alt={album.title}
          className={styles.image}
        />
      </div>

      <h3 className={styles.title}>
        {album.title}
      </h3>

      <p className={styles.artist}>
        {album.artist}
      </p>

    </article>
  );
}

export default AlbumCard;