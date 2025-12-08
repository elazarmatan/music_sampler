export default async function saveState(namesate:string,state:boolean[][],setAccesSave: React.Dispatch<React.SetStateAction<"pending" | "succes" | "failed" | "not">>){
    setAccesSave('pending')
    const response = await fetch(`http://localhost:3005/create/saveState/${namesate}${new Date().toLocaleString()}`,{
        method:"POST",
        headers:{
             "Content-Type": "application/json"
        },
        body:JSON.stringify(state)
    })
    if(response.ok){
        setAccesSave('succes')
    }
    else{
        setAccesSave('failed')
    }
}