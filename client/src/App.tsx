import { useState } from "react"
import GridMusic from "./components/layout/GridMusic"
import Logo from "./components/layout/Logo"
import NavBar from "./components/layout/NavBar"
import Slogen from "./components/layout/Slogen"
import { MyContext } from "./context/MyContext.context"

function App() {
  const [addColumn,setAddcolumn] = useState(5)
  return (
    <MyContext>
      <div className="page">
      <header>
        <Logo/>
        <Slogen/>
      </header>
      <GridMusic/>
      <NavBar/>
    </div>
    </MyContext>
  )
}

export default App