const ContactForm = ({
  careerDetailName,
  modalState,
  toggleModal,
  closeMenu,
}) => {
  const options = [
    "Email",
    "Proshare",
    "Total Jobs",
    "Student Jobs",
    "Google",
    "Quora",
    "Pinterest",
    "Facebook",
    "Instagram",
    "Twitter",
    "LinkedIn",
    "Hot Nigerian Jobs",
    "Other Websites",
    "Through a Friend",
    "Event",
  ];

  return (
    <div className={`action-get-started ${modalState ? "show" : ""} `}>
      <div className="get-started-form-class">
        <div className="close-menu" onClick={toggleModal}>
          <img src={closeMenu} alt="" />
        </div>

        <h2>Get More Details</h2>
        <p>{careerDetailName}</p>
        <form action="">
          <div className="full-names">
            <input type="text" name="" id="" placeholder="First Name" />
            <input type="text" name="" id="" placeholder="Last Name" />
          </div>
          <div className="email">
            <input type="text" placeholder="Email" />
          </div>
          <div className="job-company">
            <input type="text" placeholder="Job Title" />
            <input type="text" placeholder="Company" />
          </div>
          <div className="country-phone">
            <select name="" id="">
              <option value="Nigeria">Nigeria</option>
              <option value=""></option>
            </select>
            <input type="phone" placeholder="Phone" />
          </div>
          <div className="message">
            <textarea name="" id="" placeholder="message" rows={5}></textarea>
          </div>
          <div className="howdidyouhear">
            <select name="" id="">
              <option value="">How did you hear About StackwisR?</option>
              {options.map((option, index) => {
                return (
                  <option key={index} value="">
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
        <button>SUBMIT</button>
      </div>
    </div>
  );
};

export default ContactForm;
