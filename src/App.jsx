import { Route, Routes } from "react-router-dom"
import {BlogsList} from "./BlogsList"
import { AddBlog } from "./AddBlog"

//this is new branch 
function App() {
  return (
    <div>
  
      <Routes>
      <Route  path="/" element={<BlogsList/>} />
      <Route  path="/addblog" element={<AddBlog/>} />
  
      {/* <Route  path="/admin"element={<Login/>} />
      <Route  path="/signup"element={<SignUp/>} /> */}
        
      </Routes>
    </div>
  )
}

export default App
