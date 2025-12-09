import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import getAllMusicSaved from "../utils/getAllMusicSaved"
import Music from "../components/Music"
import '../style/musicsaved.css'
import { useMyContext } from "../context/MyContext.context"

function MusicSaves() {
    const homenav = useNavigate()
    const {error,setError} = useMyContext()
    const [musics,setmusics] = useState<[] | [{data:{channel:string,matrix:boolean[][]},key:{Key:string}}]>([])
    useEffect(() => {
      getAllMusicSaved(setmusics,setError)
    },[])
    if(error) {return<div>
    <button onClick={() => {setError(false);homenav('/')}} className="button">HOME</button>
    <h1 className="error">ERROR</h1>
    </div>
    }
  return (
    <section>
        <header className="inlinemusic">
            <button onClick={() => {homenav('/')}} className="button">HOME</button>
            <img src="/logo.png" className="logo" />
            <div></div>
        </header>
        <section className="bodyMusic">
        {musics.length ?<div className="musicsaved">
          {musics.map((music) => (
            music ?
            <Music name={music.key.Key} grid={music.data.matrix} channel={music.data.channel}/>
            :<div></div>
          ))}
        </div>:<h1 className="loading">loading...</h1>}
        </section>
    </section>
  )
}

export default MusicSaves