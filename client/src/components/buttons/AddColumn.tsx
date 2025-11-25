import { useMyContext } from "../../context/MyContext.context"
function AddColumn() {
    const {addColumn,setAddcolumn} = useMyContext()

  return (
    <button onClick={() => {
            if(addColumn < 50){
                setAddcolumn(prev => prev + 1)
            }
            }}>ADD COLUMN</button>
  )
}

export default AddColumn