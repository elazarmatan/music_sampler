import AddColumn from "../buttons/AddColumn";
import Stop from "../buttons/Stop";
import Channels from "../buttons/Channels";
import ControlSpeed from "../buttons/ControlSpeed";
import Play from "../buttons/Play";
import Restart from "../buttons/Restart";
import Volume from "../buttons/Volume";
import SaveState from "../buttons/SaveState";
import '../../style/navbar.css'

function NavBar() {
  return (
    <footer id="navbar">
        <Play/>
        <Channels/>
        <AddColumn/>
        <Restart/>
        <Stop/>
        <ControlSpeed/>
        <Volume/>
        <SaveState/>
    </footer>
  )
}
export default NavBar