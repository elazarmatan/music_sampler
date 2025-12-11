import * as Tone from "tone";

export interface propsAudio{
    pathAudio:string
    active:boolean
    onToggle:() => void
    colorAfter:string
    mycolumn:number
    row:number
}

export interface propsmusic{
    name:string
    grid:boolean[][]
    channel:string
}

export type contextType = {
  addColumn: number;
  setAddcolumn: React.Dispatch<React.SetStateAction<number>>;
  gridState: boolean[][];
  setGridState: React.Dispatch<React.SetStateAction<boolean[][]>>;
  urls: string[];
  setUrls: React.Dispatch<React.SetStateAction<string[]>>;
  isPlaying: React.RefObject<boolean>;
  controllSpeed: number;
  setcontrollSpeed: React.Dispatch<React.SetStateAction<number>>;
  column: number;
  setColumn: React.Dispatch<React.SetStateAction<number>>;
  gain: React.RefObject<Tone.Gain<"gain">>;
  error:boolean
  setError:React.Dispatch<React.SetStateAction<boolean>>
  active:boolean
  setActive:React.Dispatch<React.SetStateAction<boolean>>
  namechannel:string
  setnamechannel:React.Dispatch<React.SetStateAction<string>>
  channel:string
  setchannel:React.Dispatch<React.SetStateAction<string>>
  showVolume:number
  setshowVolume:React.Dispatch<React.SetStateAction<number>>;
};

export interface allMusicProps{
    musics:[] | [{data:{channel:string,matrix:boolean[][]},key:{Key:string}}]
}