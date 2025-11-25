import React, { createContext , useContext, useEffect, useRef, useState } from 'react'
import * as Tone from "tone";

type contextType = {
    addColumn:number
    setAddcolumn:React.Dispatch<React.SetStateAction<number>>
    gridState:boolean[][]
    setGridState:React.Dispatch<React.SetStateAction<boolean[][]>>
    urls:string[]
    isPlaying: React.RefObject<boolean>
    controllSpeed:number
    setcontrollSpeed:React.Dispatch<React.SetStateAction<number>>
    column:number
    setColumn:React.Dispatch<React.SetStateAction<number>>
    gain:React.RefObject<Tone.Gain<"gain">>
}

interface providerProps{
    children:React.ReactNode
}

export const context = createContext<contextType | null>(null)

export function MyContext(props:providerProps) {
  const [addColumn,setAddcolumn] = useState<number>(5)
  const isPlaying = useRef<boolean>(false)
  const [controllSpeed, setcontrollSpeed] = useState(1000);
  const [column,setColumn] = useState(-1)
  const gain = useRef(new Tone.Gain(1).toDestination())
  const urls = [
    "http://localhost:9000/piano/piano/A1vH.wav",
    "http://localhost:9000/piano/piano/A2vL.wav",
    "http://localhost:9000/piano/piano/A3vH.wav",
    "http://localhost:9000/piano/piano/A4vH.wav",
    "http://localhost:9000/piano/piano/A5vH.wav",
    "http://localhost:9000/piano/piano/A6vH.wav",
    "http://localhost:9000/piano/piano/A7vH.wav",
  ];

  const [gridState,setGridState] = useState<boolean[][]>(
    Array.from({length:addColumn},() => 
        Array.from({length:7},() => true)
    )
  )

  useEffect(() => {
    setGridState((prev) => {
      if (prev.length < addColumn) {
        return [...prev, Array.from({ length: 7 }, () => true)];
      }
      if (prev.length > addColumn) {
        return prev.slice(0, addColumn);
      }
      return prev;
    });
  }, [addColumn]);
  return <context.Provider value={{addColumn,setAddcolumn,gridState,setGridState,urls,isPlaying,controllSpeed,setcontrollSpeed,column,setColumn,gain}}>{props.children}</context.Provider>
}

export function useMyContext(){
    const myContext = useContext(context)
    if (!myContext) throw new Error("useTimer must be used within a TimerProvider");
    return myContext
}