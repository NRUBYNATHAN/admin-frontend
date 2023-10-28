


import { useState } from "react";
import { useEffect } from "react";
import {Blog} from "./Blog";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import "./Blog.css";
import {useDispatch, useSelector} from "react-redux"
import Button from '@mui/material/Button';
import { useLogoutMutation } from "./slices/userSlice";
import {logout} from "./slices/authSlice"
import axios from "axios";
export function BlogsList () {
 
  const [logoutApiCall] = useLogoutMutation();

  const navigate=useNavigate()
  const dispatch=useDispatch()
  //blog list fetch in API
  const [blog, setBlog] = useState([]);
  const {userInfo} = useSelector((state)=>state.auth);
   

  
const getBlogs=()=>{
  
  fetch(`${API}/api/blog`)
      .then((data) => data.json())
      .then((mvs) => setBlog(mvs));
 
}
console.log(blog)


  useEffect(() => getBlogs(), []);


//   const deleteBlog = async(id)=>{
// console.log(`hello bay ${id}`)
//   await axios.delete(`${API}/abi/blog/${id}`);
 
//   }
  const deleteBlog = async(id)=>{
console.log(id)
    await axios.delete(`${API}/api/blog/${id}`)
      getBlogs();
    }

const Logout=async ()=>{
 
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
    
  
}

  return (
  
 <div>
     {userInfo && <div className="main_btns"><Button color="success" variant="contained" onClick={()=>navigate("/addblog")}>add blog</Button> <Button color="success" variant="contained" onClick={Logout}>Logout</Button></div>}
      <div className="bloglist">
      
      <h1 className="heading">Blog Website</h1>
      <div className="theme">
        <h3 className="theme_des">Best Places in the World That You Just Can't Miss!</h3>
      </div>
        {blog?.map((mv,index) => 
        (<Blog key={mv._id} 
          number={index+1}
        data={mv} 
        id={mv._id} 
       
        EditButton={  
          <IconButton   color="secondary" onClick={()=>navigate(`/editblog/${mv._id}`)} aria-label="edit product">
           <EditIcon /> Edit
          </IconButton>}
          DeletteButton={  
            <IconButton  color="error" onClick={()=>deleteBlog(mv._id)} aria-label="delete">
            <DeleteIcon /> Delete
            </IconButton>}
    
        />))}
      </div>

    </div>
   
  );
}