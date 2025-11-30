import { useEffect } from "react";
import { useMyContext } from "../../context/MyContext.context";
import playSpecificColumn from "../../utils/playColumn";

function Play() {
  const { urls, gridState, isPlaying , controllSpeed,column,setColumn,gain,active,setActive} = useMyContext();

  const play = () => {setActive(true); isPlaying.current = true;
    if(column < gridState.length - 1){
      setColumn(prev => prev + 1)
    } 
  }
  const pause = () => {isPlaying.current = false;setActive(false);setColumn(-1)}

  useEffect(() => {
      if (!isPlaying.current) return
      playSpecificColumn({gridState,column,urls,setColumn,controllSpeed,gain,isPlaying})
  },[column,active])

  return (
    <div>
      {!active ? (
        <button className="Play" onClick={play}>▶</button>
      ) : (
        <button className="Play"onClick={pause}>⏹</button>
      )}
    </div>
  );
}

export default Play;