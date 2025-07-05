import "./steps.css";

// SVG icon components
const Upload = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const Search = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
);
const MapPin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 21s-6-5.686-6-10A6 6 0 1118 11c0 4.314-6 10-6 10z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="11" r="2" fill="currentColor"/></svg>
);
const CheckCircle = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}><circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/><path d="M6 10l2.5 2.5L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const ArrowRight = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}><path d="M7 10h6m0 0-2.5-2.5M13 10l-2.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const Steps = () => (
  <section className="steps-section">
    <div className="steps-container">
      <div className="steps-header">
        <h2 className="steps-title">How It Works</h2>
        <p className="steps-desc-main">
          Get from where you are to where you want to be in just three simple steps
        </p>
      </div>

      {/* Steps Grid */}
      <div className="steps-grid">
        {/* Step 1 */}
        <div className="step-card">
          <div className="step-icon step-icon-indigo">
            <Upload className="icon" />
          </div>
          <div className="step-content">
            <div className="step-number step-number-indigo">1</div>
            <h3 className="step-title">Upload & Analyze</h3>
            <p className="step-desc">
              Upload your resume and target job description to get started.
            </p>
            <div className="step-highlight step-highlight-indigo">
              <CheckCircle className="icon-small" />
              Understand where you stand
            </div>
          </div>
        </div>
        {/* Step 2 */}
        <div className="step-card">
          <div className="step-icon step-icon-purple">
            <Search className="icon" />
          </div>
          <div className="step-content">
            <div className="step-number step-number-purple">2</div>
            <h3 className="step-title">Skill Gap Analysis</h3>
            <p className="step-desc">
              Get a detailed analysis of your current skills versus job requirements.
            </p>
            <div className="step-highlight step-highlight-purple">
              <CheckCircle className="icon-small" />
              We highlight what's missing
            </div>
          </div>
        </div>
        {/* Step 3 */}
        <div className="step-card">
          <div className="step-icon step-icon-pink">
            <MapPin className="icon" />
          </div>
          <div className="step-content">
            <div className="step-number step-number-pink">3</div>
            <h3 className="step-title">Personalized Roadmap</h3>
            <p className="step-desc">
              Receive a custom learning path tailored to your career goals.
            </p>
            <div className="step-highlight step-highlight-pink">
              <CheckCircle className="icon-small" />
              Learn, practice, and land your next role
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="steps-cta">
        <button className="steps-cta-btn">
          Get Started Now
          <ArrowRight className="cta-arrow" />
        </button>
        <p className="steps-cta-note">
          No credit card required • Free skill gap analysis
        </p>
      </div>
    </div>
  </section>
);

export default Steps;