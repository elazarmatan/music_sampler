import { useMyContext } from "../../context/MyContext.context"

function ControlSpeed() {
    const {controllSpeed,setcontrollSpeed}= useMyContext()

    const speed = (e: React.ChangeEvent<HTMLInputElement>) => {setcontrollSpeed(Number(e.target.value))}

  return (
    <div id="ControlSpeed">
        <section id="minmax">
        <p style={{opacity:0.3}}>x5</p>
        <input type="range" min={100} max={1000} step={50} value={controllSpeed} onChange={speed} className="inputRange"/>
        <p style={{opacity:0.3}}>x0.5</p>
        </section>
        <p>Speed: x{(1000 / controllSpeed / 2).toFixed(2)}</p>
    </div>
  )
}

export default ControlSpeed