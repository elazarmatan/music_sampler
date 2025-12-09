    
export default async function getAllMusicSaved(setmusics: React.Dispatch<React.SetStateAction<any>>,setError: React.Dispatch<React.SetStateAction<boolean>>){

    try {
        const allmusic = await fetch('http://localhost:3005/music/musicsaves')
        if(allmusic.ok){
            setError(false)
            const finnishMusic = await allmusic.json()
            setmusics(finnishMusic)
        }
        else{
            setError(true)
        }
    } catch (error) {
        setError(true)
        console.log(error)
    }
}