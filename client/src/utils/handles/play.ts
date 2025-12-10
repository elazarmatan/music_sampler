import type { pauseParams, playParams } from "../../interfaces/params";



export const play = ({setActive,isPlaying,column,addColumn,setColumn,gridState}:playParams) => {setActive(true); isPlaying.current = true;
    if(column > addColumn - 1) setColumn(addColumn - 1)
    if(column < gridState.length - 1){
      setColumn(prev => prev + 1)
    } 
  }

export  const pause = ({isPlaying,setActive,setColumn}:pauseParams) => {isPlaying.current = false;setActive(false);setColumn(-1)}