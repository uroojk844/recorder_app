import { useCallback, useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import RecordingList from "./components/Recordings";
import "./css/app.css";

function App() {
  const [audioList, setAudioList] = useState([]);

  let recorder;
  const audio = [];

  let startRecording = () => recorder.start();
  let stopRecording = () => recorder.stop();

  window.navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (e) => {
      audio.pop();
      audio.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(audio, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      setAudioList([...audioList, url]);
    };
  });

  return (
    <div className="container">
      <Nav />
      <RecordingList audioList={audioList} />
      <Footer
        startRecording={startRecording}
        stopRecording={stopRecording}
      />
    </div>
  );
}

export default App;
