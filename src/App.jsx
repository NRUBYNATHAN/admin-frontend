import { Route, Routes } from "react-router-dom"
import {BlogsList} from "./BlogsList"
import { AddBlog } from "./AddBlog"
import "./App.css";
import Header from "./Header";
function App() {
  return (
    <div>
  
      <Routes>
      <Route  path="/" element={[<Header/>,<BlogsList/>]} />
      <Route  path="/addblog" element={<AddBlog/>} />
      </Routes>
    </div>
  )
}

export default App
