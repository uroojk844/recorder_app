import style from "./RecordingList.module.css";
import Recording from "./Recording";

function RecordingList({ audioList }) {
  return (
    <div className={style.list}>
      {audioList.map((url, index) => (
        <Recording url={url} index={index} key={index} />
      ))}
    </div>
  );
}

export default RecordingList;
