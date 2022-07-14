import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Fell in luv",
      artist: "Playboi Carti ft Bryson Tiller",
      img_src: "./react player pics/carti.png",
      src: "./react player songs/Fell In Luv.mp3",
    },
    {
      title: "If I was Your Girlfriend",
      artist: "Prince",
      img_src: "./react player pics/prince adore.png",
      src: "./react player songs/Prince_-_If_I_Was_Your_Girlfriend__(getmp3.pro).mp3",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect( () => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length -1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
       />
      
    </div>
  );
}

export default App;
