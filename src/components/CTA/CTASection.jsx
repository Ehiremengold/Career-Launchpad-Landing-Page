const CTASection = () => {

  const countries = [
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 4",
    "Country 5",
    "Country 6",
    "Country 7",
    "Country 8",
    "Country 9",
    "Country 10",
  ];

  

  return (
    <section className="cta__section hidden">
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
              {countries.map((country, index) => (
                <option key={index} value={`${country}`}>
                  {country}
                </option>
              ))}
            </select>
            <input type="text" placeholder="Phone" />
            <button className="cta-btn">BOOK A CALL</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
