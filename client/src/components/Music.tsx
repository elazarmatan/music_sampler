import { useNavigate } from "react-router"
import { useMyContext } from "../context/MyContext.context"
import parseFileKey from "../utils/parseFileKey"
import '../style/musicsaved.css'

interface props{
    name:string
    grid:boolean[][]
    channel:string
}

function Music({name,grid,channel}:props) {
    const {setGridState,setnamechannel,setAddcolumn} = useMyContext()
    const homenav = useNavigate()
    const fullName = parseFileKey(name)
  return (
    <div className="music">
        <h2>{fullName.fileName}</h2>
        <p>created at: {fullName.createdAt}</p>
        <p>channel: {channel}</p>
        <button onClick={() => {
            setAddcolumn(grid.length)
            setnamechannel(channel)
            setGridState(grid)
            homenav('/')
        }}className="button">play</button>
    </div>
  )
}

export default Music