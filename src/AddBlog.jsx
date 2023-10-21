import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { API } from './global';

export function AddBlog() {
 
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const navigate=useNavigate();

  const handleSubmit= (e)=>{
    e.preventDefault();

       const newBlog = {
                image: image,
                description: description,
        };
        console.log(newBlog)

      fetch(`${API}/add`,{
        method:"POST",
        body:JSON.stringify([newBlog]),
        headers:{"Content-Type": "application/json",},
        
      });
      navigate("/")
       };

      
  return (
    
    <form onSubmit={handleSubmit} className="input">
      <TextField onChange={(event)=>setImage(event.target.value)}  name ="image" label="image" variant="outlined" />
      <TextField onChange={(event)=>setDescription(event.target.value)}  name ="description" label="description" variant="outlined" />
      <Button  type="submit" variant="contained">Add Blog</Button>
    </form>
   
  );
}