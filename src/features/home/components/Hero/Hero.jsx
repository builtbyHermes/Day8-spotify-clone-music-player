// src/features/home/components/Hero/Hero.jsx

import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.content}>

        <p className={styles.greeting}>
          Good Evening
        </p>

        <h1 className={styles.title}>
          Discover your next favorite song
        </h1>

        <p className={styles.description}>
          Explore featured albums, playlists and artists curated just for you.
        </p>

        <button className={styles.playButton}>
          Play Featured
        </button>

      </div>

    </section>
  );
}

export default Hero;