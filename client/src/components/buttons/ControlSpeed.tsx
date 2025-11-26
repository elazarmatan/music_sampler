import { useMyContext } from "../../context/MyContext.context"

function ControlSpeed() {
    const {controllSpeed,setcontrollSpeed}= useMyContext()
  return (
    <div id="ControlSpeed">
        <input type="range" min={100} max={1000} step={50} value={controllSpeed} onChange={(e) => {
            setcontrollSpeed(Number(e.target.value))
            }}/>
        <p>Speed:{controllSpeed / 1000}</p>
    </div>
  )
}

export default ControlSpeed