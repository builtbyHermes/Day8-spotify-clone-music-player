// src/features/player/components/VolumeControl.jsx

import "./VolumeControl.css";

function VolumeControl({
  volume,
  onVolumeChange,
}) {
  const handleVolumeChange = (event) => {
    onVolumeChange(Number(event.target.value));
  };

  return (
    <div className="volume-control">
      <span
        className="volume-icon"
        aria-hidden="true"
      >
        🔊
      </span>

      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="volume-slider"
        aria-label="Volume"
      />
    </div>
  );
}

export default VolumeControl;