import AddColumn from "../buttons/AddColumn";
import BackToStart from "../buttons/BackToStart";
import Channels from "../buttons/Channels";
import ControlSpeed from "../buttons/ControlSpeed";
import Play from "../buttons/Play";
import Restart from "../buttons/Restart";
import Volume from "../buttons/Volume";

function NavBar() {
  return (
    <footer id="navbar">
        <Play/>
        <Channels/>
        <AddColumn/>
        <Restart/>
        <BackToStart/>
        <ControlSpeed/>
        <Volume/>
    </footer>
  )
}

export default NavBar