
interface params{
    setUrls: React.Dispatch<React.SetStateAction<string[]>>
    setGridState: React.Dispatch<React.SetStateAction<boolean[][]>>;
    setError:React.Dispatch<React.SetStateAction<boolean>>
    addColumn: number;
    namechannel:string
}
export default async function getChannel({setError,setGridState,setUrls,addColumn,namechannel}:params){
    try {
        const piano = await fetch(`http://localhost:3005/channel/${namechannel}`);
        if(piano.ok){
          const finishdata = await piano.json();
          setUrls(finishdata.piano);
          setGridState(
          Array.from({length:addColumn},() =>
          Array.from({length:finishdata.piano.length},() => true)
          )
        )
        }
        else{
          setError(true)
        }
      } catch (error) {
        setError(true)
      }
}