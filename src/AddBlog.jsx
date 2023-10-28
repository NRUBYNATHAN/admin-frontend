import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { API } from './global';
import {useSelector} from "react-redux"
import axios from "axios"
import "./Blog.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export function AddBlog() {
 
  const [image, setImage] = useState("");
  const [blog, setBlog] = useState("");
  const navigate=useNavigate();
  const {userInfo} = useSelector((state=>state.auth))
console.log(userInfo);
  const handleSubmit= async (e)=>{
    e.preventDefault();

       const newBlog = {
                user:userInfo._id,
                username:userInfo.userName,
                blog: blog,
                image: image,
               
        };
        console.log(newBlog)

      await axios.post(`${API}/api/blog/create`,newBlog)
      navigate("/")
       };

      
  return (
    <div className='add'>
    <form  className="input">
      <h2 className='heading'>Enter Image Url</h2>
      <TextField className='input1' onChange={(event)=>setImage(event.target.value)}  name ="image" label="image_url" variant="outlined" />
      <div className="editor">
                <h2>Write a blog</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello !!</p>"
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setBlog(data)
                        
                    } }
                   
                    
                />
            </div>
      <Button className='input1' onClick={handleSubmit}  variant="contained">Add Blog</Button>
    </form>
    </div>
   
  );
}