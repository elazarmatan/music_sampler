import { useEffect, useRef, useState } from "react"
import { useMyContext } from "../../context/MyContext.context"
import saveState from "../../utils/saveState"

function SaveState() {
    const {gridState,namechannel} = useMyContext()
    const [wantSave,setWAntSAve] = useState(false)
    const nameFile = useRef<HTMLInputElement>(null)
    const [accesSave,setAccesSave] = useState<'pending' | 'succes' | 'failed' | 'not'>('not')
    useEffect(() => {
    if(accesSave === "succes" || accesSave === 'failed'){
        const wait = setTimeout(() => {
            setAccesSave('not')
            setWAntSAve(false)
        },2000)
        return () => clearTimeout(wait)
    }
  },[accesSave])


    if(accesSave === "succes"){
        return <p id="success"  className="divsave">succes!</p>
    }
    else if(accesSave === 'pending'){
        return <p id="saveLoading"  className="divsave">loading</p>
    }
    else if(accesSave === 'failed'){
        return <p  className="divsave" id="failedsave">failed to save</p>
    }

    
  return (
    <div className="divsave">
    {wantSave ? 
        <div className="wantsave">
            <input type="text" placeholder="name to file" ref={nameFile} className="inputwantsave" required/>
            <button className="button" onClick={async() => {
                if(nameFile.current?.value){
                    await saveState(nameFile.current.value,gridState,setAccesSave,namechannel)
                }
            }}>submit</button>
            <button className="button" onClick={() => {setWAntSAve(false)}}>cancel</button>
        </div>:

        <button className="button save"
        onClick={() => {setWAntSAve(true)}}>Save</button>
    }
    </div>
  )
}

export default SaveState