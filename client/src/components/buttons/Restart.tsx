import { useMyContext } from "../../context/MyContext.context";
import restart from "../../utils/handles/restart";

function Restart() {
  const {setGridState,setAddcolumn,addColumn,setcontrollSpeed,setColumn,gain,urls,setshowVolume} = useMyContext();

  return (
    <button className="restart button"
      onClick={() => restart({setGridState,setAddcolumn,addColumn,setcontrollSpeed,setColumn,gain,urls,setshowVolume})}>restart</button>
  );
}

export default Restart;
