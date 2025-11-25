import { useMyContext } from "../../context/MyContext.context"

function ControlSpeed() {
    const {controllSpeed,setcontrollSpeed}= useMyContext()
  return (
    <div id="ControlSpeed">
        <input type="range" min={100} max={1500} step={50} value={controllSpeed} onChange={(e) => {
            setcontrollSpeed(Number(e.target.value))
            }}/>
        <p>{controllSpeed / 1000} :Speed</p>
    </div>
  )
}

export default ControlSpeed