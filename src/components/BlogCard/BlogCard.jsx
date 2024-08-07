/* eslint-disable react/prop-types */
import "./BlogSection.css";
import dateIcon from "../../../public/assets/blog/date.png";
import userIcon from "../../../public/assets/blog/user.png";

const BlogCard = ({ title, author, date, image }) => {
  return (
    <div className="blog-card">
      <div className="post-img">
        <img src={image} className="blog-img" alt="" />
      </div>
      <div className="blog-details__section">
        <h6>{title}</h6>
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
