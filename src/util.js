import { v4 as uuidv4 } from "uuid";
import audio1 from './music/x.mp3';
import audio2 from './music/thikra-elissa-khoury.mp3'
import audio3 from './music/Kadebostany - Save Me (Ash Remix) (192 kbps).mp3'
import audio4 from './music/Sia and David Guetta - Floating Through Space (Official) (192 kbps).mp3'
import audio5 from './music/Alan Walker & Ava Max - Alone, Pt. II (192 kbps).mp3'
function chillHop() {
  return [
    {
      name: "Alone, Pt. II",
      cover:
        "https://i.pinimg.com/originals/fd/cd/20/fdcd205e2d65a149c31f456efbc9df71.jpg",
      artist: "Alan Walker & Ava Max",
      audio: audio5,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Floating Through Space (Official) ",
      cover:
        "https://i.pinimg.com/originals/59/ac/2c/59ac2ca1cca574a538bb2acc7a573985.jpg",
      artist: "Sia and David Guetta",
      audio: audio4,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Save Me (Ash Remix) ",
      cover:
        "https://i.pinimg.com/originals/ab/e1/3d/abe13d1afb14d820cbbbaffc3a8e3527.jpg",
      artist: "Kadebostany",
      audio: audio3,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "5od balk 3lya",
      cover:
        "http://www.al-fann.net/uploads/media/default/0001/27/thumb_26301_default_sqmedium.jpeg",
      artist: "Elissa",
      audio: audio1,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "thikra",
      cover:
        "http://www.al-fann.net/uploads/media/default/0001/18/thumb_17850_default_sqmedium.jpeg",
      artist: "Elissa",
      audio: audio2,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
