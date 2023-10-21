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
      </Routes>
    </div>
  )
}

export default App
