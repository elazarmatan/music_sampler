import React, { createContext , useContext, useEffect, useState } from 'react'

type contextType = {
    addColumn:number
    setAddcolumn:React.Dispatch<React.SetStateAction<number>>
    gridState:boolean[][]
    setGridState:React.Dispatch<React.SetStateAction<boolean[][]>>
}

interface providerProps{
    children:React.ReactNode
}

export const context = createContext<contextType | null>(null)

export function MyContext(props:providerProps) {
  const [addColumn,setAddcolumn] = useState<number>(5)
  
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
  return <context.Provider value={{addColumn,setAddcolumn,gridState,setGridState}}>{props.children}</context.Provider>
}

export function useMyContext(){
    const myContext = useContext(context)
    if (!myContext) throw new Error("useTimer must be used within a TimerProvider");
    return myContext
}