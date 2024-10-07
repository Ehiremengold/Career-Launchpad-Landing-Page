import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CareerDetail.css";
import rating from "/src/assets/career-detail-icons/rating.svg";
import language from "/src/assets/career-detail-icons/language.svg";
import Tab from "../../components/Tab/Tab.jsx";
import Loading from "../../components/LoadingSpinner/Loading.jsx";
import closeMenu from "../../assets/svg/menu-close.png";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import  {Helmet} from "react-helmet-async";

const CareerDetail = () => {
  const { slug } = useParams(); // Retrieve slug from URL
  const [careerDetail, setCareerDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!modalState);
  };

  useEffect(() => {
    const rootUrl = import.meta.env.VITE_API_ROOT;

    const fetchCareerDetail = async () => {
      try {
        const response = await axios.get(`${rootUrl}/api/careerpaths/${slug}/`);
        setCareerDetail(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchCareerDetail();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading career detail.</div>;
  }

  if (!careerDetail) {
    return <div>No career detail found.</div>;
  }

  return (
    <>
    <Helmet>
        <title>{careerDetail.career_name}</title>
        <meta
          name="description"
         // content={meta_description}  Set description
        />
      </Helmet>
      <section
        className="course-detail"
        style={{
          "--background-image": `url(${careerDetail.img_display})`,
        }}
      >
        <div className="course-detail__wrapper">
          <div className="course_description">
            <h1>{careerDetail.career_name}</h1>
            <p>{careerDetail.description}</p>
            <p>{careerDetail.additional_info}</p>{" "}
            {/* Update with actual fields */}
          </div>
          <div className="course-detail-action-btns">
            <div className="rating">
              <img src={rating} alt="" />
              <h2>{careerDetail.rating}</h2>
            </div>
            <div className="language">
              <img src={language} alt="" />
              <h2>{careerDetail.language}</h2>
            </div>
            <div className="enroll-action-btn">
              <button>Enroll Now</button>
            </div>
          </div>
        </div>
      </section>

      <Tab
        toggleModal={toggleModal}
        whatYouWillLearn={careerDetail.what_you_will_learn_list}
        skills={careerDetail.skills_you_will_gain}
        potentialJobs={careerDetail.potential_jobs}
      />
      <ContactForm
        careerDetailName={careerDetail.career_name}
        modalState={modalState}
        toggleModal={toggleModal}
        closeMenu={closeMenu}
      />
    </>
  );
};

export default CareerDetail;
