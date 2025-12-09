import { useMyContext } from "../../context/MyContext.context"
function AddColumn() {
    const {addColumn,setAddcolumn ,column,setColumn} = useMyContext()

  const add = () => {if(addColumn < 100){setAddcolumn(prev => prev + 1)}}
  const remove = () => {{if(addColumn > 10){
    if(column > addColumn) setColumn(addColumn - 1)
    setAddcolumn(prev => prev - 1)}}}

  return (
    <div id="AddColumn">
      <button className="add button" onClick={add}>+</button>
      <p>column</p>
      <button className="add button" onClick={remove}>-</button>
    </div>
    
  )
}

export default AddColumn