import { useRef } from "react";
import blogHero from "/src/assets/blog/blog-hero.jpg";
import arrowDown from "/src/assets/svg/arrow_down_white.svg";
import dateIcon from "/src/assets/blog/date.png";
import userIcon from "/src/assets/blog/user.png";
import "./Blog.css";

const Blog = () => {
  const blogPosts = useRef(null);

  const scrollToSection = () => {
    blogPosts.current.scrollIntoView({ behavior: "smooth" });
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

      <section className="blog-posts" ref={blogPosts}>
        <div className="blog-posts-wrapper">
          <div className="latest-post-card">
            {/*  */}
            <div className="post-img">
              <img src={blogHero} alt="" />
            </div>
            {/*  */}
            <div className="post-details">
              <h2>Top 10 Tech Skills to Learn in 2024 to Earn 6 Figures</h2>
              <p>
                Discover the top 15 tech skills to learn in 2024 that can help
                you earn a six-figure salary...
              </p>
              <a href="#">
                <p className="post-link">Read more</p>
              </a>
            </div>
            {/*  */}
            <div className="blue-line"></div>
            <div className="post-details__author-date">
              <div className="post-details__date">
                <img src={dateIcon} alt="" />
                <p className="post-timestamp">21, July 2024</p>
              </div>
              <div className="post-details__author">
                <img src={userIcon} alt="" />
                <p className="post-author">Agbo blessing</p>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="latest-posts-section">
            <div className="latest-posts-card">
              <img src={blogHero} alt="" />
              <div className="post-title-details">
                <h3>Data Analysis: Top 5 tools</h3>
                <div className="latest-post__details">
                  <div className="latest-post-details__date">
                    <img src={dateIcon} alt="" />
                    <p className="post-timestamp">21, July 2024</p>
                  </div>
                  <div className="latest-post-details__author">
                    <img src={userIcon} alt="" />
                    <p className="post-author">Agbo blessing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="latest-posts-card">
              <img src={blogHero} alt="" />
              <div className="post-title-details">
                <h3>Data Analysis: Top 5 tools</h3>
                <div className="latest-post__details">
                  <div className="latest-post-details__date">
                    <img src={dateIcon} alt="" />
                    <p className="post-timestamp">21, July 2024</p>
                  </div>
                  <div className="latest-post-details__author">
                    <img src={userIcon} alt="" />
                    <p className="post-author">Agbo blessing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="latest-posts-card">
              <img src={blogHero} alt="" />
              <div className="post-title-details">
                <h3>Data Analysis: Top 5 tools</h3>
                <div className="latest-post__details">
                  <div className="latest-post-details__date">
                    <img src={dateIcon} alt="" />
                    <p className="post-timestamp">21, July 2024</p>
                  </div>
                  <div className="latest-post-details__author">
                    <img src={userIcon} alt="" />
                    <p className="post-author">Agbo blessing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
