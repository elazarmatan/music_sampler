import * as Tone from 'tone'
import { useMyContext } from '../context/MyContext.context'

interface props{
    pathAudio:string
    active:boolean
    onToggle:() => void
    colorAfter:string
    mycolumn:number
}

function AudioSquare({pathAudio , active , onToggle ,colorAfter ,mycolumn}:props) {
  const {column,gain} = useMyContext()
  const play = async() => {
        await Tone.start()
        const audio = new Tone.Player(pathAudio).connect(gain.current)
        await audio.load(pathAudio)
        if(active){
          audio.start()
        }
        onToggle()
    }
  return (
    <div onClick={play} className={`square ${column === mycolumn ? "playColumn":""}`} style={{background:active ? "#aad2e5ff":colorAfter}}></div>
  )
}
export default AudioSquare