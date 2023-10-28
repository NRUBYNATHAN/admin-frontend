import { Route, Routes } from "react-router-dom"
import {BlogsList} from "./BlogsList"
import { AddBlog } from "./AddBlog"
import "./App.css";
import Header from "./Header";
import LoginScreen from "./LoginScreen";
import Register from "./Register";
import {EditBlog}  from "./EditBlog";

function App() {
  return (
    <div>
  
      <Routes>
      <Route  path="/" element={[<Header/>,<BlogsList/>]} />
      <Route  path="/addblog" element={[<Header/>,<AddBlog/>]} />
      <Route  path="/editblog/:id" element={[<Header/>,<EditBlog/>]} />
      <Route  path="/login" element={<LoginScreen/>} />
      <Route  path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App

