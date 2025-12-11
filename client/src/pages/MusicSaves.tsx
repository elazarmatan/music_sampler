import { useEffect, useState } from "react"
import getAllMusicSaved from "../utils/getAllMusicSaved"
import Music from "../components/Music"
import '../style/musicsaved.css'
import { useMyContext } from "../context/MyContext.context"
import InlineMusic from "../components/layout/InlineMusic"
import AllMusicSaved from "../components/layout/AllMusicSaved"

function MusicSaves() {
    const {error,setError} = useMyContext()
    const [musics,setmusics] = useState<[] | [{data:{channel:string,matrix:boolean[][]},key:{Key:string}}]>([])
    useEffect(() => {
      getAllMusicSaved(setmusics,setError)
    },[])

    if(error) {return<div>
    <InlineMusic/>
    <h1 className="error">ERROR</h1>
    </div>
    }

  return (
    <section>
        <InlineMusic/>
        <AllMusicSaved musics={musics}/>
    </section>
  )
}

export default MusicSaves