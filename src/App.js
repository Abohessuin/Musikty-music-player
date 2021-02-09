import React, { useState, useRef } from "react";
import "./style/App.scss";
import Player from "./componenets/Player";
import Song from "./componenets/Song";
import Library from "./componenets/Library";
import Nav from "./componenets/Nav";
import data from "./util";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const audioRef = useRef(null);
  return (
    <div className="App">
      <Nav isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} />

      <Song currentSong={currentSong} />

      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        audioRef={audioRef}
        setSongs={setSongs}
        isLibraryOpen={isLibraryOpen}
      />
    </div>
  );
}

export default App;
