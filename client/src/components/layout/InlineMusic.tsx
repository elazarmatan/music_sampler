import { useNavigate } from "react-router"

function InlineMusic() {
    const homenav = useNavigate()
  return (
    <header className="inlinemusic">
            <button onClick={() => {homenav('/')}} className="button">HOME</button>
            <img src="/logo.png" className="logo" />
            <div></div>
        </header>
  )
}

export default InlineMusic