import BlogCard from "./BlogCard";
import "./BlogSection.css";
import { blogPosts } from "./blogutils";

const BlogCards = () => {
  return (
    <section className="blog__section">
      <h1>Resources</h1>
      <div className="blog__content">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            author={post.author}
            date={post.date}
            image={post.image}
          />
        ))}
      </div>
    </section>
  );
};
export default BlogCards;
