// src/features/player/utils/formatTime.js

export function formatTime(time) {
  if (!time || isNaN(time)) {
    return "0:00";
  }


  const minutes = Math.floor(time / 60);


  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");


  return `${minutes}:${seconds}`;
}