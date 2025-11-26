import React, { createContext , useContext, useEffect, useRef, useState } from 'react'
import * as Tone from "tone";

type contextType = {
    addColumn:number
    setAddcolumn:React.Dispatch<React.SetStateAction<number>>
    gridState:boolean[][]
    setGridState:React.Dispatch<React.SetStateAction<boolean[][]>>
    urls:string[]
    setUrls:React.Dispatch<React.SetStateAction<string[]>>
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
  const [controllSpeed, setcontrollSpeed] = useState(500);
  const [column,setColumn] = useState(-1)
  const gain = useRef(new Tone.Gain(1).toDestination())
  const [urls,setUrls] = useState([''])
  

  useEffect(() => {
    const channel = async() =>{
      const piano = await fetch("http://localhost:3005/channel")
      const finishdata = await piano.json()
      console.log(finishdata.piano)
      setUrls(finishdata.piano)
      // setGridState(
      //   Array.from({length:addColumn},() => 
      //   Array.from({length:urls.length},() => true)
      //   )
      // )
      
    console.log(addColumn,urls.length)
    }
    channel()
  },[])
  
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
  return <context.Provider value={{addColumn,setAddcolumn,gridState,setGridState,urls,isPlaying,controllSpeed,setcontrollSpeed,column,setColumn,gain,setUrls}}>{props.children}</context.Provider>
}

export function useMyContext(){
    const myContext = useContext(context)
    if (!myContext) throw new Error("error");
    return myContext
}