interface props{
    pathAudio:string
}
function AudioSquare({pathAudio}:props) {
  const play = () => {
        const audio = new Audio(pathAudio)
        audio.play()
    }
  return (
    <div onClick={play}>
      a
    </div>
  )
}

export default AudioSquare