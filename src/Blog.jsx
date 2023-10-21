
import Card from '@mui/material/Card';
import "./Blog.css";

export function Blog({ data,id,EditButton,DeletteButton }) {

 
  return (

  <Card className='blog' >
    
     <img className="blog_poster" src={data.image} alt="image" />
     <p className="blog_description">{data.description}</p>
      
          <div className="btns">
        {EditButton} {DeletteButton} 
          </div>
    </Card>

  );
}
