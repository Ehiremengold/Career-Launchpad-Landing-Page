import "./Tab.css";

const Tab = () => {
  return (
    <div className="widget">
      <div className="tabs">
        <input type="radio" id="overview" name="tabs" defaultChecked />
        <label htmlFor="overview">Overview</label>

        <input type="radio" id="experience" name="tabs" />
        <label htmlFor="experience">Experience</label>

        <input type="radio" id="awards" name="tabs" />
        <label htmlFor="awards">Awards</label>
      </div>

      <div className="tab-content">
        <div className="tab-content-1">
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ad
            eum! Vero asperiores nostrum voluptatum libero blanditiis
            consectetur vitae nihil facere, nemo error iste voluptas incidunt
            cumque atque tempore soluta?
          </p>
        </div>

        <div className="tab-content-2">
          <h2>Experience</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ad
            eum! Vero asperiores nostrum voluptatum libero blanditiis
            consectetur vitae nihil facere, nemo error iste voluptas incidunt
            cumque atque tempore soluta?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ad
            eum! Vero asperiores nostrum voluptatum libero.
          </p>
        </div>

        <div className="tab-content-3">
          <h2>Awards</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ad
            eum! Vero asperiores nostrum voluptatum libero blanditiis
            consectetur vitae nihil facere, nemo error iste voluptas incidunt
            cumque atque tempore soluta?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
