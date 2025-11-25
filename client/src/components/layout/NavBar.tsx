import AddColumn from "../buttons/AddColumn";
import Play from "../buttons/Play";
import RemoveColumn from "../buttons/RemoveColumn";

function NavBar() {
  return (
    <footer>
        <AddColumn/>
        <RemoveColumn/>
        <Play/>
    </footer>
  )
}

export default NavBar