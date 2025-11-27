import { useMyContext } from "../../context/MyContext.context";

function Restart() {
  const {setGridState,setAddcolumn,addColumn,setcontrollSpeed,setColumn,gain,} = useMyContext();

  const restart = () => {setAddcolumn(5);setGridState(Array.from({ length: addColumn }, () =>Array.from({ length: 7 }, () => true)));setcontrollSpeed(500);setColumn(-1);gain.current.gain.value = 0.5}

  return (
    <button
      onClick={restart}>Restart</button>
  );
}

export default Restart;
