import * as Tone from 'tone'

interface props{
    pathAudio:string
    active:boolean
    onToggle:() => void
    colorAfter:string
}

function AudioSquare({pathAudio , active , onToggle ,colorAfter}:props) {
  const play = async() => {
        await Tone.start()
        const audio = new Tone.Player(pathAudio).toDestination()
        await audio.load(pathAudio)
        if(active){
          audio.start()
        }
        onToggle()
    }
  return (
    <div onClick={play} className="square" style={{background:active ? "aliceblue":colorAfter}}></div>
  )
}

export default AudioSquare