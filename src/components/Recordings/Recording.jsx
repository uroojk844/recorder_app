import { FaMicrophoneAlt, FaPause, FaPlay } from "react-icons/fa";
import style from "./Recording.module.css";
import { useState } from "react";

function Recording({ url, index }) {
  let audio = new Audio(url);
  let [playing, setPlaying] = useState(false);

  const playAudio = () => {
    audio.play();
    setPlaying(true);
    setTimeout(() => {
      setPlaying(false);
    }, audio.duration * 1000);
  };

  return (
    <div className={style.list_item}>
      <div className={style.icon}>
        <FaMicrophoneAlt />
      </div>
      <div className={style.name}>Recording {index + 1} </div>
      <div className={style.icon} onClick={playAudio}>
        <FaPlay className={playing ? style.hide : ""} />
        <FaPause className={!playing ? style.hide : ""} />
      </div>
    </div>
  );
}

export default Recording;
