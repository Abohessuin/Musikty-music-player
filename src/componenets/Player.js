import React, { useRef, useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  useEffect(() =>{
    const newSongDate = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongDate);
  },[currentSong])
  const audioplayHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    setSongInfo({
      ...songInfo,
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    setSongInfo({ ...songInfo, currentTime: e.target.value });
    audioRef.current.currentTime = songInfo.currentTime;
  };

 
  const skipHandler = async (direction) => {
    let currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

  
    if (direction === "skip-forward") {

     await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
    } else {
      if ((currentSongIndex - 1) % songs.length == -1) {
   
        await setCurrentSong(songs[songs.length - 1]);
        return;
      } else {
        await setCurrentSong(songs[(currentSongIndex - 1) % songs.length]);
      }
    }
    if(isPlaying) audioRef.current.play();
  };

  const  skipEndedHandler=async ()=>{
    let currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );
     await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
     if(isPlaying) audioRef.current.play();
    }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipHandler("skip-back")}
        />
        <FontAwesomeIcon
          onClick={audioplayHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipHandler("skip-forward")}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={skipEndedHandler}
      ></audio>
    </div>
  );
};

export default Player;
