import * as Tone from "tone";
import type { paramsPlayColumn } from "../interfaces/params";



export default async function playSpecificColumn({
  gridState,
  column,
  setColumn,
  urls,
  controllSpeed,
  gain,
  isPlaying
}: paramsPlayColumn) {
  if(!gridState[column].length) return
  for (let row = 0; row < gridState[column].length; row ++) {
    if(!isPlaying.current) break
    if (!gridState[column][row]) {
      const audio = new Tone.Player(urls[row]).connect(gain.current)
      await audio.load(urls[row]);
      audio.start();
    }
  }
  await new Promise((resulve) => setTimeout(resulve, controllSpeed));
  if(!isPlaying.current)return
  if(column === gridState.length -1){
    setColumn(0)
  }
  else{
    setColumn((prev) => prev + 1);
  }
}