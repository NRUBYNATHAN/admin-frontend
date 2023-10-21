
import Card from '@mui/material/Card';
import "./Blog.css";

export function Blog({number, data,id,EditButton,DeletteButton }) {

 
  return (
<div>
<h2><span className='numbers'>LESSION :</span> {number} </h2>

  <Card className='blog' >
    
     <img className="blog_poster" src={data.image} alt="image" />
     <p className="blog_description">{data.description}</p>
      
          <div className="btns">
        {EditButton} {DeletteButton} 
          </div>
    </Card>
    </div>
  );
}
