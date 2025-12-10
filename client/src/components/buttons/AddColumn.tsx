import { useMyContext } from "../../context/MyContext.context"
import { add, remove } from "../../utils/handles/addColumn"
function AddColumn() {
    const {addColumn,setAddcolumn ,column,setColumn} = useMyContext()


  return (
    <div id="AddColumn">
      <button className="add button" onClick={() => add({addColumn,setAddcolumn})}>+</button>
      <p>column</p>
      <button className="add button" onClick={() => remove({addColumn,setAddcolumn,setColumn,column})}>-</button>
    </div>
    
  )
}

export default AddColumn