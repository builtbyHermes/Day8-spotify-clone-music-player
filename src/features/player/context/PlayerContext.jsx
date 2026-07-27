import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";


const PlayerContext = createContext();


export function PlayerProvider({ children }) {

  // Audio Engine
  const audioRef = useRef(null);


  // Player State
  const [currentSong, setCurrentSong] = useState(null);

  const [queue, setQueue] = useState([]);

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  const [volume, setVolumeState] = useState(50);

  const [shuffle, setShuffle] = useState(false);

  const [repeat, setRepeat] = useState(false);



  /*
    -------------------------
    PLAY SONG
    -------------------------
  */

  const playSong = (song, newQueue = []) => {

    setCurrentSong(song);


    if (newQueue.length > 0) {
      setQueue(newQueue);
    }


    if(audioRef.current){

      audioRef.current.src = song.audio;

      audioRef.current.play();

      setIsPlaying(true);
    }

  };
  /*
    -------------------------
    PLAY
    -------------------------
  */

  const play = () => {

    if(!audioRef.current) return;


    audioRef.current.play();

    setIsPlaying(true);

  };
  /*
    -------------------------
    PAUSE
    -------------------------
  */

  const pause = () => {

    if(!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };
  /*
    -------------------------
    SEEK
    -------------------------
  */
  const seekTo = (time) => {

    if(!audioRef.current) return;

    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  /*
    -------------------------
    VOLUME
    -------------------------
  */

  const setVolume = (value) => {

    if(!audioRef.current) return;

    audioRef.current.volume = value / 100;
    setVolumeState(value);

  };

  /*
    -------------------------
    SHUFFLE
    -------------------------
  */

  const toggleShuffle = () => {

    setShuffle(prev => !prev);

  };

  /*
    -------------------------
    REPEAT
    -------------------------
  */

  const toggleRepeat = () => {

    setRepeat(prev => !prev);

  };

  /*
    -------------------------
    NEXT SONG
    -------------------------
  */

  const next = () => {

    if(queue.length === 0) return;

    const nextSong =
    getNextSong(
      queue,
      currentSong,
      shuffle
    );

    if(nextSong){

      playSong(nextSong);

    }

  };



  /*
    -------------------------
    PREVIOUS SONG
    -------------------------
  */

  const previous = () => {

    if(queue.length === 0) return;


    const currentIndex =
      queue.findIndex(
        song => song.id === currentSong?.id
      );


    const previousSong =
      queue[currentIndex - 1];


    if(previousSong){

      playSong(previousSong);

    }

  };



  /*
    -------------------------
    AUDIO EVENTS
    -------------------------
  */

  useEffect(() => {


    const audio = audioRef.current;


    if(!audio) return;



    const updateTime = () => {

      setCurrentTime(audio.currentTime);

    };



    const updateDuration = () => {

      setDuration(audio.duration);

    };



    const handleEnded = () => {


      if(repeat){

        audio.currentTime = 0;

        audio.play();

      }
      else{

        next();

      }

    };



    audio.addEventListener(
      "timeupdate",
      updateTime
    );


    audio.addEventListener(
      "loadedmetadata",
      updateDuration
    );


    audio.addEventListener(
      "ended",
      handleEnded
    );



    return () => {

      audio.removeEventListener(
        "timeupdate",
        updateTime
      );


      audio.removeEventListener(
        "loadedmetadata",
        updateDuration
      );


      audio.removeEventListener(
        "ended",
        handleEnded
      );

    };


  }, [
    repeat,
    queue,
    currentSong,
    shuffle
  ]);




  return (

    <PlayerContext.Provider

      value={{

        // State

        currentSong,
        queue,
        isPlaying,
        currentTime,
        duration,
        volume,
        shuffle,
        repeat,


        // Actions

        playSong,
        play,
        pause,
        next,
        previous,
        seekTo,
        setVolume,
        toggleShuffle,
        toggleRepeat,

      }}

    >

      {children}


      {/* Audio Engine */}

      <audio ref={audioRef}/>


    </PlayerContext.Provider>

  );

}




export function usePlayer(){

  const context = useContext(PlayerContext);


  if(!context){

    throw new Error(
      "usePlayer must be used inside PlayerProvider"
    );

  }


  return context;

}