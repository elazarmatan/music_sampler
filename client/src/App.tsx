import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import MusicSaves from "./pages/MusicSaves"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/music" element={<MusicSaves/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App