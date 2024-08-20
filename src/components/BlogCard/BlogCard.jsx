/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./BlogSection.css";
import dateIcon from "../../../src/assets/blog/date.png";
import userIcon from "../../../src/assets/blog/user.png";

const BlogCard = ({ title, author, date, image, slug }) => {
  return (
    <div className="blog-card">
      <div className="post-img">
        <img src={image} className="blog-img" alt="" />
      </div>
      <div className="blog-details__section">
        <Link to={`blog/${slug}/`}><h6>{title}</h6></Link>
        <div className="blog-author__details">
          <img src={userIcon} alt="" />
          <p>{author}</p>
        </div>
        <div className="blog-time-stamp">
          <img src={dateIcon} alt="" />
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
