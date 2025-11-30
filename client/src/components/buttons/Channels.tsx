import { useMyContext } from "../../context/MyContext.context"
import channels from "../../utils/handles/channels"

function Channels() {
  const {setnamechannel,namechannel,channel,setchannel} = useMyContext()
  return (
    <button onClick={() => {
      channels({namechannel,setchannel,setnamechannel})
    }}>{channel}</button>
  )
}

export default Channels