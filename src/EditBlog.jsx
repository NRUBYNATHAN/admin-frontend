import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API } from "./global";
import "./Blog.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ruby, setRuby] = useState({ title: "", blog: "", image: "" });

  useEffect(() => {
    fetch(`${API}/api/blog/${id}`)
      .then((data) => data.json())
      .then((mvs) => setRuby(mvs));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRuby({ ...ruby, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBlog = {
      title: ruby.title,
      blog: ruby.blog,
      image: ruby.image,
    };

    await axios.put(`${API}/api/blog/edit/${id}`, updatedBlog);
    navigate("/");
  };

  return (
    <div className="add">
      <form onSubmit={handleSubmit} className="input">
        <TextField
          className="input1"
          name="title"
          variant="outlined"
          value={ruby.title}
          onChange={handleInputChange}
        />
        <h2 className="heading1">Rewrite a image url</h2>
        <TextField
          className="input1"
          name="image"
          variant="outlined"
          value={ruby.image}
          onChange={handleInputChange}
        />
        <div className="editor">
          <h2>Rewrite a blog summary</h2>
          <CKEditor
            editor={ClassicEditor}
            data={`${ruby.blog}`}
            onChange={(event, editor) => {
              const data = editor.getData();
              setRuby({ blog: data });
            }}
          />
        </div>

        <Button
          className="input1"
          type="submit"
          variant="contained"
          color="success"
        >
          Save
        </Button>
      </form>
    </div>
  );
}
