// src/features/player/components/PlayerControls.jsx

import "./PlayerControls.css";

function PlayerControls({
  isPlaying,
  shuffle,
  repeat,
  onPlay,
  onPause,
  onNext,
  onPrevious,
  onToggleShuffle,
  onToggleRepeat,
}) {
  const handlePlayPause = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  return (
    <div className="player-controls">
      <button
        className={`control-btn ${shuffle ? "active" : ""}`}
        onClick={onToggleShuffle}
        aria-label="Toggle Shuffle"
      >
        🔀
      </button>

      <button
        className="control-btn"
        onClick={onPrevious}
        aria-label="Previous Song"
      >
        ⏮
      </button>

      <button
        className="play-btn"
        onClick={handlePlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? "⏸" : "▶"}
      </button>

      <button
        className="control-btn"
        onClick={onNext}
        aria-label="Next Song"
      >
        ⏭
      </button>

      <button
        className={`control-btn ${repeat ? "active" : ""}`}
        onClick={onToggleRepeat}
        aria-label="Toggle Repeat"
      >
        🔁
      </button>
    </div>
  );
}

export default PlayerControls;