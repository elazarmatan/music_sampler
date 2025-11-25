import { useEffect, useState } from "react";
import { useMyContext } from "../../context/MyContext.context";
import playSpecificColumn from "../../utils/playColumn";

function Play() {
  const { urls, gridState, isPlaying , controllSpeed,column,setColumn,gain} = useMyContext();
  const [active, setActive] = useState(false);

  useEffect(() => {
      if (!isPlaying.current) return
      playSpecificColumn({gridState,column,urls,setColumn,controllSpeed,gain})
  },[column])

  return (
    <div>
      {!active ? (
        <button className="Play" onClick={() => {
          setActive(true)
          isPlaying.current = true;
          setColumn(prev => prev + 1)
        }}>▶</button>
      ) : (
        <button className="Play"
          onClick={() => {
            isPlaying.current = false;
            setActive(false)
          }}
        >
          ⏹
        </button>
      )}
    </div>
  );
}

export default Play;