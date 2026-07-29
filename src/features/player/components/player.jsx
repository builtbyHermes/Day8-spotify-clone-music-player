// src/features/player/components/Player.jsx

import { usePlayer } from "../context/PlayerContext";

import SongInfo from "./SongInfo";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";

// import "./Player.css";

function Player() {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,

    play,
    pause,
    next,
    previous,

    seekTo,
    setVolume,

    toggleShuffle,
    toggleRepeat,

    shuffle,
    repeat,
  } = usePlayer();

  if (!currentSong) return null;

  return (
    <footer className="player">
      <SongInfo currentSong={currentSong} />

      <PlayerControls
        isPlaying={isPlaying}
        onPlay={play}
        onPause={pause}
        onNext={next}
        onPrevious={previous}
        shuffle={shuffle}
        repeat={repeat}
        onToggleShuffle={toggleShuffle}
        onToggleRepeat={toggleRepeat}
      />

      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onSeek={seekTo}
      />

      <VolumeControl
        volume={volume}
        onVolumeChange={setVolume}
      />
    </footer>
  );
}

export default Player;