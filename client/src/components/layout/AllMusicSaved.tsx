import type { allMusicProps } from "../../interfaces/props"
import Music from "../Music"



function AllMusicSaved({musics}:allMusicProps) {
  return (
    <section className="bodyMusic">
        {musics.length ?<div className="musicsaved">
          {musics.map((music) => (
            music &&<Music key={music.key.Key} name={music.key.Key} grid={music.data.matrix} channel={music.data.channel}/>
          ))}
        </div>:<h1 className="loading">loading...</h1>}
        </section>
  )
}

export default AllMusicSaved