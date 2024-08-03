import "./PricingTable.css";

const PricingTable = () => {
  return (
    <div className="pricing-table">
      <div className="row">
        <div className="cell">Enrollment Fee</div>
        <div className="cell">£298</div>
      </div>
      <div className="row highlighted">
        <div className="cell">Programme Fee</div>
        <div className="cell">
          {" "}
          <span className="strikethrough">£15,975</span> £12,750
        </div>
      </div>
      <div className="row">
        <div className="cell">Deposit</div>
        <div className="cell">£3,750</div>
      </div>
      <div className="row highlighted">
        <div className="cell">12 Monthly Installment</div>
        <div className="cell">£750</div>
      </div>
      <div className="row">
        <div className="cell">Sign Off Fee</div>
        <div className="cell">£2,950</div>
      </div>
      <div className="row">
        <div className="cell">One-off 10% off programme Fees</div>
        <div className="cell">£11,475</div>
      </div>
    </div>
  );
};
export default PricingTable;
