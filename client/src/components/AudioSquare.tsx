import * as Tone from 'tone'
import { useMyContext } from '../context/MyContext.context.tsx'

interface props{
    pathAudio:string
    active:boolean
    onToggle:() => void
    colorAfter:string
    mycolumn:number
    row:number
}

function AudioSquare({pathAudio , active , onToggle ,colorAfter ,mycolumn,row}:props) {
  const {column,gain,urls} = useMyContext()
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
    <div onClick={play} className={`square ${column === mycolumn ? "playColumn":""}`} style={{background:row === urls.length - 1 ? active ? "aliceblue":'linear-gradient(145deg, #d5e9fcff 0%, #4c7195ff 80%)':active ? "white":colorAfter}}>{row === urls.length - 1 && "🥁"}</div>
  )
}
export default AudioSquare