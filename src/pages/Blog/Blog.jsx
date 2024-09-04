import arrowDown from "/src/assets/svg/arrow_down_white.svg";
import "./Blog.css";
import BlogPosts from "../../components/BlogPosts/BlogPosts";
import { memo, useRef } from "react";

const Blog = () => {
  const blogPostsRef = useRef(null);

  const scrollToSection = () => {
    blogPostsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hero-scroll">
        <section className="blog-hero">
          {/* <img src={blogHero} alt="" /> */}
          <div className="blog-hero__content">
            <h1>Blog</h1>
            <p>
              Stay informed and inspired with the latest updates, trends, and
              insights in the world of technology. From industry news to expert
              opinions, our blog is your go-to source for all things tech.
            </p>
          </div>
        </section>
        <div className="scroll-down" onClick={scrollToSection}>
          <img src={arrowDown} alt="" />
        </div>
      </div>
      <BlogPosts blogPostsRef={blogPostsRef} />
    </>
  );
};
export default memo(Blog);
