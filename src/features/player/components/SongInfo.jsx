// src/features/player/components/SongInfo.jsx

import "./SongInfo.css";

function SongInfo({ currentSong }) {
  const { cover, title, artist } = currentSong;

  return (
    <div className="song-info">
      <div className="song-cover">
        <img
          src={cover}
          alt={`${title} album cover`}
        />
      </div>

      <div className="song-details">
        <h4 className="song-title">{title}</h4>
        <p className="song-artist">{artist}</p>
      </div>

      <button
        className="favorite-btn"
        aria-label="Like Song"
      >
        ♡
      </button>
    </div>
  );
}

export default SongInfo;