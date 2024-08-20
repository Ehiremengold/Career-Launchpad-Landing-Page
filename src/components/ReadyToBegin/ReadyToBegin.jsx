import "./ReadyToBegin.css";


const ReadyToBegin = ({toggleModal}) => {
  return (
    <div className="ready-to-begin">
      <h1>Ready to Begin?</h1>
      <p>
        Click on &#34;Get Started&#34; to fill out the form, and one of our
        career experts will contact you shortly.
      </p>
      <button onClick={toggleModal}>Get Started</button>
    </div>
  );
};
export default ReadyToBegin;
