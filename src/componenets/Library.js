import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, currentSong, setCurrentSong,audioRef,isPlaying,setSongs,isLibraryOpen}) => {
  return (
    <div className={`library ${isLibraryOpen ?'active-library' :'' }`}>
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong
          song={song}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          id={song.id}
          songs={songs}
          key={song.id}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setSongs={setSongs}

        />
      ))}
    </div>
  );
};

export default Library;
