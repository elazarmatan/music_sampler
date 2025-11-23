import { useMyContext } from "../../context/MyContext.context"

function RemoveColumn() {
    const {addColumn,setAddcolumn} = useMyContext()
  return (
    <button onClick={() => {
        if(addColumn > 5){
            setAddcolumn(prev => prev - 1)
        }
    }}>RemoveColumn</button>
  )
}

export default RemoveColumn