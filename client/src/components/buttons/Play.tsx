import { useEffect } from "react";
import { useMyContext } from "../../context/MyContext.context";
import playSpecificColumn from "../../utils/playColumn";
import { pause, play } from "../../utils/handles/play";

function Play() {
  const { urls, gridState, isPlaying , controllSpeed,column,setColumn,gain,active,setActive,addColumn} = useMyContext();

  

  useEffect(() => {
      if (!isPlaying.current) return
      playSpecificColumn({gridState,column,urls,setColumn,controllSpeed,gain,isPlaying})
  },[column,active])

  return (
    <div>
      {!active ? (
        <button className="Play button" onClick={() => play({setActive,isPlaying,column,addColumn,setColumn,gridState})}>▶</button>
      ) : (
        <button className="Play button"onClick={() => pause({isPlaying,setActive,setColumn})}>⏹</button>
      )}
    </div>
  );
}

export default Play;