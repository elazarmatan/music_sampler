import { useEffect, useRef, useState } from "react"
import { useMyContext } from "../../context/MyContext.context"
import saveState from "../../utils/saveState"

function SaveState() {
    const {gridState} = useMyContext()
    const [wantSave,setWAntSAve] = useState(false)
    const nameFile = useRef<HTMLInputElement>(null)
    const [accesSave,setAccesSave] = useState<'pending' | 'succes' | 'failed' | 'not'>('not')
    useEffect(() => {
    if(accesSave === "succes"){
        const wait = setTimeout(() => {
            setAccesSave('not')
            setWAntSAve(false)
        },2000)
        return () => clearTimeout(wait)
    }
  },[accesSave])
    if(accesSave === "succes"){
        return <p>succes</p>
    }
    else if(accesSave === 'pending'){
        return <p>loading</p>
    }
  return (
    <div id="divsave">
    {wantSave ? 
        <div>
            <input type="text" placeholder="name to file" ref={nameFile}/>
            <button onClick={async() => {
                if(nameFile.current?.value){
                    await saveState(nameFile.current.value,gridState,setAccesSave)
                }
            }}>submit</button>
        </div>:
        <button className="button save"
        onClick={() => {
        setWAntSAve(true)
        }}
        >Save</button>
    }
    </div>
  )
}

export default SaveState