import type { paramsAdd, paramsRemove } from "../../interfaces/params"



export const add = ({addColumn,setAddcolumn}:paramsAdd) => {
    if(addColumn < 100){setAddcolumn(prev => prev + 1)}
}


export const remove = ({addColumn,column,setAddcolumn,setColumn}:paramsRemove) => {
    {if(addColumn > 10){
    if(column > addColumn) setColumn(addColumn - 1)
    setAddcolumn(prev => prev - 1)}}
}