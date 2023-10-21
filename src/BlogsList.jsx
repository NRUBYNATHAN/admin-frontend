


import { useState } from "react";
import { useEffect } from "react";
import {Blog} from "./Blog";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import "./Blog.css";

export function BlogsList () {
  //blog list fetch in API
  const [blog, setBlog] = useState([]);

const getBlogs=()=>{
  
  fetch(`${API}`)
      .then((data) => data.json())
      .then((mvs) => setBlog(mvs));
 
}


  useEffect(() => getBlogs(), []);


  const deleteBlog = async(id)=>{

  await fetch(`${API}/blog/${id}`,{
      method:"DELETE",
    });
    getBlogs();
  }
  const navigate=useNavigate()
  return (
  
 <div>
   
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
          <IconButton  color="secondary" onClick={()=>navigate(`/editblog/${mv._id}`)} aria-label="edit product">
           <EditIcon />
          </IconButton>}
          DeletteButton={  
            <IconButton  color="error" onClick={()=>deleteBlog(mv._id)} aria-label="delete">
            <DeleteIcon />
            </IconButton>}
    
        />))}
      </div>

    </div>
   
  );
}