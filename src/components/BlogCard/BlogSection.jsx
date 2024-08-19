/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import "./BlogSection.css";
import { blogPosts } from "./blogutils";
import { truncateText } from "../../../utils.js";
import Loading from "../LoadingSpinner/Loading.jsx";

const BlogCards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    const rootUrl = import.meta.env.VITE_API_ROOT;

    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${rootUrl}blog/latest-posts/`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="wrapper">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <h4>Error Loading Blog posts</h4>
      </div>
    );
  }

  return (
    <section className="blog__section">
      <h1>Resources</h1>
      <div className="blog__content" id="blog">
        {data.map((post) => {
          const { id, image, author, title, created } = post;
          return (
            <BlogCard
              key={id}
              title={title}
              author={author}
              date={created}
              image={image}
            />
          );
        })}
      </div>
    </section>
  );
};
export default BlogCards;
