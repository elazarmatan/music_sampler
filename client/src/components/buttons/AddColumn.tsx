import { useMyContext } from "../../context/MyContext.context"
function AddColumn() {
    const {addColumn,setAddcolumn} = useMyContext()

  return (
    <div id="AddColumn">
      <button className="add" onClick={() => {
            if(addColumn < 50){
                setAddcolumn(prev => prev + 1)
            }
            }}>+</button>
      <p>column</p>
      <button className="add" onClick={() => {
        if(addColumn > 5){
            setAddcolumn(prev => prev - 1)
        }
    }}>-</button>
    </div>
    
  )
}

export default AddColumn