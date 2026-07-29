function PlaylistGrid({ playlists = [] }) {

  return (

    <div className="playlist-grid">

      {
        playlists.map((playlist) => (

          <div
            key={playlist.id}
            className="playlist-card"
          >

            <img
              src={playlist.cover}
              alt={playlist.name}
            />

            <h3>
              {playlist.name}
            </h3>

            <p>
              {playlist.description}
            </p>

          </div>

        ))
      }

    </div>

  );

}


export default PlaylistGrid;