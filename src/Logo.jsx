import { Link } from 'react-router-dom';
import "./Blog.css"
export function Logo() {
  return (
    <div>
      <Link to="/">
        {/* <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaanUxFbiNPP3JvlzpDYrlDsEPx6DQ_a9tWg&usqp=CAU" alt="home" /> */}
        <img className="img1" src="https://www.worldatlas.com/r/w1200/upload/68/7c/0e/6672156239-01bde2b717-z.jpg" alt="home" />
      </Link>
    </div>
  );
}