import { useEffect, useState } from "react";
import axios from "axios";

const CTASection = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name"
        );
        const sortedCounties = response.data
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(sortedCounties);
      } catch (error) {
        console.log("Error getting countries: ", error);
      }
    };

    getCountries();
  }, []);

  return (
    <section className="cta__section hidden" id="cta__section">
      <div className="cta__section_content">
        <div className="text-section">
          <h2>Speak with our career consultant</h2>
          <p>Secure your spot now! Seats are filling up fast.</p>
        </div>
        <div className="form-section">
          <form action="">
            <div className="name">
              <input type="text" placeholder="Firstname" />
              <input type="text" placeholder="Lastname" />
            </div>
            <input type="text" placeholder="Email" />
            <select name="Country" id="" placeholder="Choose a Country">
              <option>-- Select a Country --</option>
              {countries.map((country, index) => (
                <option key={index} value={`${country}`}>
                  {country}
                </option>
              ))}
            </select>
            <input type="text" placeholder="Phone" />
          </form>
          <a
            href="https://calendly.com/stackwisr/request-a-call-with-us"
            target="_blank"
          >
            <div className="cta-btn">BOOK A CALL</div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
