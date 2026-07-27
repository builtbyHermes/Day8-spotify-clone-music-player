// src/features/player/utils/getNextSong.js


export function getNextSong(
  queue,
  currentSong,
  shuffle = false
) {


  if (!queue || queue.length === 0) {
    return null;
  }
  /*
    Shuffle mode
  */

  if (shuffle) {

    const randomIndex =
      Math.floor(
        Math.random() * queue.length
      );


    return queue[randomIndex];

  }

  /*
    Normal order
  */
 
  const currentIndex =
    queue.findIndex(
      song => song.id === currentSong?.id
    );



  const nextSong =
    queue[currentIndex + 1];



  return nextSong || null;

}