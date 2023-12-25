import { FaCircle, FaMicrophoneAlt } from "react-icons/fa";
import style from "./Footer.module.css";
import { useState } from "react";

function Footer({ startRecording, stopRecording }) {
  let [isRecording, setIsRecording] = useState(false);
  const text = isRecording ? "Recording..." : "Click to start recording";
  const setText = () => {
    isRecording = !isRecording;
    setIsRecording(isRecording);
    isRecording ? startRecording() : stopRecording();
  };
  return (
    <footer>
      <div className="text">{text}</div>
      <div onClick={setText} className={style.btn}>
        {isRecording ? <FaCircle /> : <FaMicrophoneAlt />}
      </div>
    </footer>
  );
}

export default Footer;
