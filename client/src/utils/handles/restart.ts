import * as Tone from "tone";

interface params{
    setGridState: React.Dispatch<React.SetStateAction<boolean[][]>>
    setAddcolumn: React.Dispatch<React.SetStateAction<number>>
    addColumn: number
    setcontrollSpeed: React.Dispatch<React.SetStateAction<number>>
    setColumn: React.Dispatch<React.SetStateAction<number>>
    gain: React.RefObject<Tone.Gain<"gain">>
    urls: string[]
    setshowVolume: React.Dispatch<React.SetStateAction<number>>
}

export default function restart({setGridState,setAddcolumn,addColumn,setcontrollSpeed,setColumn,gain,urls,setshowVolume}:params){
    setAddcolumn(10);
    setGridState(Array.from({ length: addColumn }, () =>Array.from({ length: urls.length }, () => true)));
    setcontrollSpeed(500);setColumn(-1);
    gain.current.gain.value = 1;
    setshowVolume(1);
}