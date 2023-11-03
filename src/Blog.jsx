import Card from "@mui/material/Card";
import "./Blog.css";
import { useSelector } from "react-redux";
export function Blog({ number, data, id, EditButton, DeletteButton }) {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div>
      <h2>
        <span className="numbers">LESSION :</span> {number}{" "}
      </h2>

      <Card className="blog">
        <h1>{data?.title}</h1>
        <img className="blog_poster" src={data.image} alt="image" />
        <div
          className="blog_description"
          dangerouslySetInnerHTML={{ __html: data.blog }}
        ></div>

        {userInfo !== null && (
          <div className="btns">
            {EditButton} {DeletteButton}
          </div>
        )}
      </Card>
    </div>
  );
}
