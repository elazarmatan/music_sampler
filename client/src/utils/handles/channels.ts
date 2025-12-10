import type { paramsChannels, paramslogo } from "../../interfaces/params";


export function logoChannel({namechannel,setchannel}:paramslogo){
    switch (namechannel) {
        case 'piano':
            setchannel('🎹')
            break;
        case 'guitar':
            setchannel('🎸')
            break
        case 'darbuka':
            setchannel('🪘')
            break
    }
}

export default function channels({namechannel,setnamechannel,setUrls}:paramsChannels){
    switch (namechannel) {
        case "piano":
          setUrls([''])
          setnamechannel("guitar")
          break;
        case "guitar":
          setUrls([''])
          setnamechannel("darbuka")
        break
        case "darbuka":
          setUrls([''])
          setnamechannel("piano")
        break
      }
}