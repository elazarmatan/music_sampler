import * as Tone from "tone";

export interface paramsAdd{
    addColumn:number
    setAddcolumn: (value: React.SetStateAction<number>) => void
}

export interface paramsRemove{
    addColumn:number
    setAddcolumn: (value: React.SetStateAction<number>) => void
    setColumn:(value: React.SetStateAction<number>) => void,column:number
}

export interface paramsChannels{
    namechannel:string
    setnamechannel:React.Dispatch<React.SetStateAction<string>>
    setUrls:React.Dispatch<React.SetStateAction<string[]>>
}

export interface paramslogo{
    namechannel:string
    setchannel:React.Dispatch<React.SetStateAction<string>>
}

export interface playParams{
    setActive:(value: React.SetStateAction<boolean>) => void
    isPlaying: React.RefObject<boolean>
    column:number
    addColumn:number
    setColumn: (value: React.SetStateAction<number>) => void
    gridState:boolean[][]
}

export interface pauseParams{
    isPlaying: React.RefObject<boolean>
    setActive:(value: React.SetStateAction<boolean>) => void
    setColumn: (value: React.SetStateAction<number>) => void
}

export interface paramsRestart{
    setGridState: React.Dispatch<React.SetStateAction<boolean[][]>>
    setAddcolumn: React.Dispatch<React.SetStateAction<number>>
    addColumn: number
    setcontrollSpeed: React.Dispatch<React.SetStateAction<number>>
    setColumn: React.Dispatch<React.SetStateAction<number>>
    gain: React.RefObject<Tone.Gain<"gain">>
    urls: string[]
    setshowVolume: React.Dispatch<React.SetStateAction<number>>
}

export interface paramsgetChannel{
    setUrls: React.Dispatch<React.SetStateAction<string[]>>
    setGridState: React.Dispatch<React.SetStateAction<boolean[][]>>;
    setError:React.Dispatch<React.SetStateAction<boolean>>
    addColumn: number;
    namechannel:string
}

export interface paramsPlayColumn {
  gridState: boolean[][];
  column: number;
  urls: string[];
  setColumn: React.Dispatch<React.SetStateAction<number>>;
  controllSpeed:number
  gain:React.RefObject<Tone.Gain<"gain">>
    isPlaying: React.RefObject<boolean>;
  
}

export interface saveParams{
    nameFile:React.RefObject<HTMLInputElement | null>
    gridState: boolean[][]
    setAccesSave: React.Dispatch<React.SetStateAction<"pending" | "succes" | "failed" | "not">>
    namechannel: string
}