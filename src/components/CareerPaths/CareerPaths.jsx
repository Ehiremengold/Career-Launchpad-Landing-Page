import { Link } from "react-router-dom";
import { useEffect } from "react";
import morePaths from "../../../src/assets/icons/right-arrow.png";
import Loading from "../LoadingSpinner/Loading";
import { truncateText } from "../../../utils.js";
import { useDispatch, useSelector } from "react-redux";
import { getCareerPaths } from "../../features/careerpaths/careerpathsSlice.js";

const CareerPaths = () => {
  const { isLoading, isError, careerpaths } = useSelector(
    (store) => store.careerpath
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCareerPaths());
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
        <h4>Error Loading Career Paths</h4>
      </div>
    );
  }

  return (
    <section className="explore-paths" id="career-paths">
      <div className="wrapper">
        <div className="explore-header">
          <h2>Explore Our Career Paths</h2>
          <p>
            Unlock new career opportunities in the most in-demand fields with
            our expert-led programs
          </p>
        </div>
        <div className="explore-paths__cards">
          {careerpaths.map((careerpath) => {
            const { id, career_name, description, slug } = careerpath;
            return (
              <div key={id} className="explore-path__card card">
                <h3>{career_name}</h3>
                <p>{truncateText(description, 100)}</p>
                <Link to={`career-detail/${slug}`}>Learn more</Link>
              </div>
            );
          })}
        </div>
      </div>
      <a href="/explore-paths">
        <div className="more-paths">
          <img src={morePaths} alt="" />
        </div>
      </a>
    </section>
  );
};
export default CareerPaths;
