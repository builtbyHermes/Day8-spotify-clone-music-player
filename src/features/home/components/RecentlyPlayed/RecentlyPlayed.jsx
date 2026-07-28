// src/features/home/components/RecentlyPlayed/RecentlyPlayed.jsx

import styles from "./RecentlyPlayed.module.css";

function RecentlyPlayed({ songs = [] }) {
  return (
    <div className={styles.container}>

      {songs.map((song) => (
        <div
          key={song.id}
          className={styles.song}
        >

          <img
            src={song.cover}
            alt={song.title}
            className={styles.cover}
          />

          <div className={styles.info}>

            <h3 className={styles.title}>
              {song.title}
            </h3>

            <p className={styles.artist}>
              {song.artist}
            </p>

          </div>

        </div>
      ))}

    </div>
  );
}

export default RecentlyPlayed;