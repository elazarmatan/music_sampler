import { useMyContext } from "../../context/MyContext.context"
import channels from "../../utils/handles/channels"

function Channels() {
  const {setnamechannel,namechannel,channel,setUrls} = useMyContext()
  return (
    <button className="channel button" onClick={() => {
      channels({namechannel,setnamechannel,setUrls})
    }}>{channel}</button>
  )
}

export default Channels