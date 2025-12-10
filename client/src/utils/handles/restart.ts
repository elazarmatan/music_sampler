import type { paramsRestart } from "../../interfaces/params";



export default function restart({setGridState,setAddcolumn,addColumn,setcontrollSpeed,setColumn,gain,urls,setshowVolume}:paramsRestart){
    setAddcolumn(10);
    setGridState(Array.from({ length: addColumn }, () =>Array.from({ length: urls.length }, () => true)));
    setcontrollSpeed(500);setColumn(-1);
    gain.current.gain.value = 1;
    setshowVolume(1);
}