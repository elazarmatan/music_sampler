import getChannellocal from "./getChanFromLocal";

interface params{
    setUrls: React.Dispatch<React.SetStateAction<string[]>>
    setGridState: React.Dispatch<React.SetStateAction<boolean[][]>>;
    setError:React.Dispatch<React.SetStateAction<boolean>>
    addColumn: number;
    namechannel:string
}
export default async function getChannel({setError,setGridState,setUrls,addColumn,namechannel}:params){
  const time = getChannellocal(namechannel+"time")
  const now = Date.now()
  const oneHour = 3600 * 1000;
  if(now - time >= oneHour){
    localStorage.removeItem(namechannel)
    localStorage.removeItem(namechannel+"time")
  }
  const local = getChannellocal(namechannel)
    if(!local){
    try {
        const music = await fetch(`http://localhost:3005/music/channel/${namechannel}`);
        if(music.ok){
          const finishdata = await music.json();
          localStorage.setItem(namechannel,JSON.stringify(finishdata.music))
          localStorage.setItem(namechannel+"time",JSON.stringify(Date.now()))
          setUrls(finishdata.music);
          setGridState((prev) => {
            return Array.from({ length: addColumn }, (_, rowIndex) => {
            return Array.from({ length: finishdata.music.length }, (_, colIndex) => {
            return prev[rowIndex]?.[colIndex] ?? true;
                });
              });
            });
        }
        else{
          setError(true)
        }
      } catch (error) {
        setError(true)
      }
    }
    else{
      setUrls(local)
      setGridState((prev) => {
            return Array.from({ length: addColumn }, (_, rowIndex) => {
            return Array.from({ length: local.length }, (_, colIndex) => {
            return prev[rowIndex]?.[colIndex] ?? true;
                });
              });
            });
    }
}