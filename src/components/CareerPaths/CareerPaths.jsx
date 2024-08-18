import axios from "axios";
import { useEffect, useState } from "react";
import morePaths from "../../../src/assets/icons/right-arrow.png";
import Loading from "../LoadingSpinner/Loading";

const CareerPaths = ({ isHome }) => {
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    const rootUrl = import.meta.env.VITE_API_ROOT;

    const fetchPaths = async () => {
      try {
        const response = await axios.get(`${rootUrl}careerpaths/`);
        setData(response.data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchPaths();
  }, []);

  if (isLoading) {
    <div className="wrapper">
      <Loading />
    </div>;
    return;
  }

  if (isError) {
    return <h4>Error Loading Career Paths</h4>;
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
          {data.map((careerpath) => {
            const { id, career_name, description } = careerpath;
            return (
              <div key={id} className="explore-path__card card">
                <h3>{career_name}</h3>
                <p>{truncateText(description, 151)}</p>
                <a href="">Learn more</a>
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
