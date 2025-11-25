import * as Tone from "tone";

interface params {
  gridState: boolean[][];
  column: number;
  urls: string[];
  setColumn: React.Dispatch<React.SetStateAction<number>>;
  controllSpeed:number
  gain:React.RefObject<Tone.Gain<"gain">>
}

export default async function playSpecificColumn({
  gridState,
  column,
  setColumn,
  urls,
  controllSpeed,
  gain
}: params) {
  if(!gridState[column].length) return
  console.log("length",gridState[column].length)
  for (let row = 0; row < gridState[column].length; row ++) {
    if (!gridState[column][row]) {
      const audio = new Tone.Player(urls[row]).connect(gain.current)
      await audio.load(urls[row]);
      audio.start();
    }
  }
  await new Promise((resulve) => setTimeout(resulve, controllSpeed));
  if(column === gridState.length -1){
    setColumn(0)
  }
  else{
    setColumn((prev) => prev + 1);
  }
}