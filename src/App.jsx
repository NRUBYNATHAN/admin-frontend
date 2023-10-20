import { Home, Login } from "@mui/icons-material"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>
      <h1>admin frontend</h1>
      <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/admin"element={<Login/>} />
      <Route  path="/signup"element={<SignUp/>} />
        
      </Routes>
    </div>
  )
}

export default App
