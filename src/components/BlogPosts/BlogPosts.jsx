import { useSelector } from "react-redux";
import dateIcon from "/src/assets/blog/date.png";
import userIcon from "/src/assets/blog/user.png";
import Loading from "../LoadingSpinner/Loading";
import { truncateString } from "../../utils";
import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBlogPosts, incrementPage } from "../../features/blog/blogSlice";
import { Link } from "react-router-dom";

const BlogPosts = ({ blogPostsRef }) => {
  const loadMorePosts = () => {
    dispatch(incrementPage());
  };

  const { posts, page, isLoading, isError, more } = useSelector(
    (store) => store.blog
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogPosts(page));
  }, [dispatch, page]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div className="error-msg">Error fetching posts</div>;
  }

  if (!posts || posts.length < 1) {
    return <h2>No posts Available</h2>;
  }
  return (
    <section className="blog-posts" ref={blogPostsRef}>
      <div className="blog-posts-wrapper">
        <div className="latest-post-card">
          {/*  */}
          <div className="post-img">
            <img src={posts[0].image} alt="main-image" />
          </div>
          {/*  */}
          <div className="post-details">
            <a href={`/blog/${posts[0].slug}`}>
              <h2>{posts[0].title}</h2>
            </a>
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
              <div className="latest-posts-card" key={id}>
                <img src={image} alt="" />
                <div className="post-title-details">
                  <a href={`/blog/${slug}`}>
                    <h3>{truncateString(title)}</h3>
                  </a>
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
            );
          })}
          {more && (
            <button
              className="see-more-btn scroll-down"
              onClick={loadMorePosts}
            >
              See More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
export default memo(BlogPosts);
