export default async function saveState(namesate:string,state:boolean[][],setloading:React.Dispatch<React.SetStateAction<boolean>>){
    const response = await fetch(`http://localhost:3005/create/saveState/${namesate}`,{
        method:"POST",
        headers:{
             "Content-Type": "application/json"
        },
        body:JSON.stringify(state)
    })
    setloading(false)
    if(response.ok){
        setloading(true)
        return true
    }
    else{
        setloading(true)
        return false
    }
}