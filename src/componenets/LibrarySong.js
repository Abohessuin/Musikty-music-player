import React from "react";

const LibrarySong = ({song,currentSong,setCurrentSong,id,songs,audioRef,isPlaying,setSongs}) => {
    const chooseSongHandler = () =>{
      const newSongDate=songs.map( (song) =>{
        if(song.id===id){
          return {
            ...song,
            active:true
          }
    }else{
       return{
         ...song,
         active:false
       }
       }
      }); 
      console.log(newSongDate);
      setSongs(newSongDate);
      const currentSong =newSongDate.filter(state => state.id===id);
      setCurrentSong(currentSong[0]);
      if(isPlaying){
          const playPromise =audioRef.current.play();
          console.log(playPromise);
          if(playPromise!==undefined){
             playPromise.then((audio) =>{
                 audioRef.current.play();
             })
          }
      }



      
    }
  return (
    <div className={`library-song ${song.active?'selected':' '} `} onClick={chooseSongHandler}>
     <img src={song.cover}></img>
      <div className="song-description">
      <h3>{song.name}</h3>  
      <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
