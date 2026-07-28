// src/features/home/components/ArtistCard/ArtistCard.jsx

import styles from "./ArtistCard.module.css";

function ArtistCard({ artist }) {
  return (
    <article className={styles.card}>

      <div className={styles.avatar}>
        <img
          src={artist.image}
          alt={artist.name}
          className={styles.image}
        />
      </div>

      <h3 className={styles.name}>
        {artist.name}
      </h3>

      <p className={styles.label}>
        Artist
      </p>

    </article>
  );
}

export default ArtistCard;