// src/features/player/components/Queue.jsx

// import "./Queue.css";

function Queue({
  currentSong,
  queue,
  onSelectSong,
}) {
  return (
    <aside className="queue">
      <section className="queue-section">
        <h3 className="queue-heading">Now Playing</h3>

        <div className="queue-current-song">
          <img
            src={currentSong.cover}
            alt={`${currentSong.title} cover`}
            className="queue-cover"
          />

          <div className="queue-song-details">
            <h4>{currentSong.title}</h4>
            <p>{currentSong.artist}</p>
          </div>
        </div>
      </section>

      <section className="queue-section">
        <h3 className="queue-heading">Up Next</h3>

        <ul className="queue-list">
          {queue.map((song) => (
            <li
              key={song.id}
              className="queue-item"
              onClick={() => onSelectSong(song)}
            >
              <img
                src={song.cover}
                alt={`${song.title} cover`}
                className="queue-cover"
              />

              <div className="queue-song-details">
                <h4>{song.title}</h4>
                <p>{song.artist}</p>
              </div>

              <span className="queue-duration">
                {song.duration}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default Queue;