import { useRef, useEffect } from "react";
// import blogHero from "/src/assets/blog/blog-hero.jpg";
import arrowDown from "/src/assets/svg/arrow_down_white.svg";
import dateIcon from "/src/assets/blog/date.png";
import userIcon from "/src/assets/blog/user.png";
import "./Blog.css";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPosts } from "../../features/blog/blogSlice";
import Loading from "../../components/LoadingSpinner/Loading";
import { truncateString } from "../../utils";

const Blog = () => {
  const blogPosts = useRef(null);
  const { posts, isLoading, isError } = useSelector((store) => store.blog);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('DISPATCH from blog');
    dispatch(getBlogPosts());
  }, [dispatch]);

  const scrollToSection = () => {
    blogPosts.current.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div className="error-msg">Error fetching posts</div>;
  }

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
              <img src={posts[0].image} alt="" />
            </div>
            {/*  */}
            <div className="post-details">
              <h2>{posts[0].title}</h2>
              <p>{truncateString(posts[0].title)}</p>
              <a href={`/blog/${posts[0].slug}/`}>
                <p className="post-link">Read more</p>
              </a>
            </div>
            {/*  */}
            <div className="blue-line"></div>
            <div className="post-details__author-date">
              <div className="post-details__date">
                <img src={dateIcon} alt="" />
                <p className="post-timestamp">{posts[0].created}</p>
              </div>
              <div className="post-details__author">
                <img src={userIcon} alt="" />
                <p className="post-author">{posts[0].author}</p>
              </div>
            </div>
            {/*  */}
          </div>

          <div className="latest-posts-section">
            {posts.slice(1).map((post) => {
              const { id, image, title, slug, author, created } = post;
              return (
                <a href={`blog/${slug}/`} key={id}>
                  <div className="latest-posts-card">
                    <img src={image} alt="" />
                    <div className="post-title-details">
                      <h3>{truncateString(title)}</h3>
                      <div className="latest-post__details">
                        <div className="latest-post-details__date">
                          <img src={dateIcon} alt="" />
                          <p className="post-timestamp">{created}</p>
                        </div>
                        <div className="latest-post-details__author">
                          <img src={userIcon} alt="" />
                          <p className="post-author">{author}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
