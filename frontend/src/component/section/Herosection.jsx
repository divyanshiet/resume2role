import "./Herosection.css";

const Herosection = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Bridge the Gap Between <br />Your Resume and Your Dream Job
      </h1>
      <p className="hero-subtitle">
        Upload your resume & a job description. Get a personalized skill roadmap to land your target role.</p>
      <div className="hero-buttons">
        <button className="hero-btn-yellow">Get My Roadmap</button>
        <button className="hero-btn-outline">See How It Works</button>
      </div>
    </section>
  );
};

export default Herosection;