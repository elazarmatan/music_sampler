import { useState } from "react"
import GridMusic from "./components/layout/GridMusic"
import Logo from "./components/layout/Logo"
import NavBar from "./components/layout/NavBar"
import Slogen from "./components/layout/Slogen"
import { MyContext } from "./context/MyContext.context"

function App() {
  return (
    <MyContext>
      <div className="page">
      <header>
        <Logo/>
      </header>
      <GridMusic/>
      <NavBar/>
    </div>
    </MyContext>
  )
}

export default App