import "./BlogDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner/Loading";
import DOMPurify from "dompurify";
import { getBlogPostDetail } from "../../features/blog/blogSlice";
import { ROOT_URL } from "../../utils";

const BlogDetail = () => {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogPostDetail(param.slug));
  }, [dispatch, param.slug]);

  const { isLoading, isError, post } = useSelector((state) => state.blog);


  if (!post || isLoading) {
    return (
      <div className="loading-spinner-container">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="loading-spinner-container">
        <h3>Error Loading data...</h3>
      </div>
    );
  }

  const { title, image, created, body, author } = post || {};

  return (
    <>
      <section
        className="detail"
        style={{ backgroundImage: `url(${ROOT_URL + image})` }}
      >
        <div className="post-detail__header">
          <h1>{title}</h1>
          <div className="post-detail__desc">
            <p>By {author}</p>
            <div>|</div>
            <p>{created}</p>
          </div>
        </div>
      </section>

      <section className="post-body">
        <div className="post-body__wrapper">
          <div className="left__main-body">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(body),
              }}
            />
          </div>
          <div className="right__main-body">
            <h1>Related Posts</h1>
            <div className="related-posts">
              {/* {[1, 2, 3.map((post, index) => {
                return <RelatedPost key={index} />;
              })} */}
            </div>
            <h1>Category</h1>
            {/* <button className="category-btn">{category}</button> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogDetail;
