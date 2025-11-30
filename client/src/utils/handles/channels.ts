interface params{
    namechannel:string
    setnamechannel:React.Dispatch<React.SetStateAction<string>>
    setchannel:React.Dispatch<React.SetStateAction<string>>
}

export default function channels({namechannel,setchannel,setnamechannel}:params){
    switch (namechannel) {
        case "piano":
          setnamechannel("guitar")
          setchannel('🎸')
          break;
        case "guitar":
          setnamechannel("piano")
          setchannel('🎹')
        break
      }
}