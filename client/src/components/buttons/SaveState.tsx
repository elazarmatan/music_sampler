import { useMyContext } from "../../context/MyContext.context"

function SaveState() {
    const {gridState} = useMyContext()
  return (
    <button onClick={() => console.log(gridState)}>SaveState</button>
  )
}

export default SaveState