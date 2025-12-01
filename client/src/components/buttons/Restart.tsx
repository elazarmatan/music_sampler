import { useMyContext } from "../../context/MyContext.context";

function Restart() {
  const {setGridState,setAddcolumn,addColumn,setcontrollSpeed,setColumn,gain,urls,setshowVolume} = useMyContext();

  const restart = () => {setAddcolumn(5);setGridState(Array.from({ length: addColumn }, () =>Array.from({ length: urls.length }, () => true)));setcontrollSpeed(500);setColumn(-1);gain.current.gain.value = 0.5,setshowVolume(0.5)}

  return (
    <button
      onClick={restart}>Restart</button>
  );
}

export default Restart;
