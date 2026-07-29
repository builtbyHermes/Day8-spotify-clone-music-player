// import "./ProgressBar.css";
import { formatTime } from "../utils/formatTime";

function ProgressBar({
  currentTime,
  duration,
  onSeek,
}) {

  const progressPercentage =
    duration ? (currentTime / duration) * 100 : 0;


  // const formatTime = (time) => {
  //   if (!time) return "0:00";

  //   const minutes = Math.floor(time / 60);
  //   const seconds = Math.floor(time % 60)
  //     .toString()
  //     .padStart(2, "0");

  //   return `${minutes}:${seconds}`;
  // };


  const handleSeek = (event) => {
    const value = Number(event.target.value);

    onSeek(value);
  };


  return (
    <div className="progress-container">

      <span className="current-time">
        {formatTime(currentTime)}
      </span>


      <input
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={handleSeek}
        className="progress-bar"
        style={{
          background: `linear-gradient(
            to right,
            #ffffff ${progressPercentage}%,
            #555 ${progressPercentage}%
          )`,
        }}
      />


      <span className="duration">
        {formatTime(duration)}
      </span>

    </div>
  );
}

export default ProgressBar;