interface params{
    namechannel:string
    setnamechannel:React.Dispatch<React.SetStateAction<string>>
    setchannel:React.Dispatch<React.SetStateAction<string>>
    setUrls:React.Dispatch<React.SetStateAction<string[]>>
}

export default function channels({namechannel,setchannel,setnamechannel,setUrls}:params){
    switch (namechannel) {
        case "piano":
          setUrls([''])
          setnamechannel("guitar")
          setchannel('🎸')
          break;
        case "guitar":
          setUrls([''])
          setnamechannel("darbuka")
          setchannel('🪘')
        break
        case "darbuka":
          setUrls([''])
          setnamechannel("piano")
          setchannel('🎹')
        break
      }
}