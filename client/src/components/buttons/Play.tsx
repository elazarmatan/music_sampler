import { useMyContext } from "../../context/MyContext.context"
import * as Tone from 'tone'

function Play() {
  const {urls,gridState,isPlaying} = useMyContext()
  return (
    <div>
       <button onClick={async() => {
      isPlaying.current = true
      while(isPlaying.current){
        if(!isPlaying.current)break
        for (let column = 0; column < gridState.length; column++) {
        for (let row = 0; row < gridState[column].length; row++) {
          if(!gridState[column][row]){
             const audio = new Tone.Player(urls[row]).toDestination()
             await audio.load(urls[row])
             audio.start()
           }
        }
        await new Promise(resulve => setTimeout(resulve,1000))
      }
      }
      
    }}>Play</button>
    <button onClick={() => {
      isPlaying.current = false
    }}>stop</button>
    </div>
  )
}

export default Play