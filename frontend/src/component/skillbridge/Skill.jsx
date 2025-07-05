import "./Skill.css";

// SVG icon placeholders
const Brain = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 15c0-2 2-2 2-4s-2-2-2-4m8 8c0-2-2-2-2-4s2-2 2-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
);
const Target = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>
);
const Link = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M10 14a5 5 0 007.07 0l1.41-1.41a5 5 0 00-7.07-7.07l-1.41 1.41" stroke="currentColor" strokeWidth="2"/><path d="M14 10a5 5 0 00-7.07 0l-1.41 1.41a5 5 0 007.07 7.07l1.41-1.41" stroke="currentColor" strokeWidth="2"/></svg>
);
const Users = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/><path d="M17 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2"/><path d="M2 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2"/><path d="M17 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2"/></svg>
);
const ArrowRight = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}><path d="M7 10h6m0 0-2.5-2.5M13 10l-2.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const Skill = () => (
  <section className="skill-section">
    <div className="skill-container">
      <div className="skill-header">
        <h2 className="skill-title">Why SkillBridge?</h2>
        <p className="skill-subtitle">
          The smartest way to bridge your skill gaps and accelerate your career growth
        </p>
      </div>

      <div className="skill-grid">
        {/* AI-Powered Analysis */}
        <div className="skill-card skill-card-indigo">
          <div className="skill-icon skill-icon-indigo">
            <Brain className="icon" />
          </div>
          <h3 className="skill-card-title">AI-Powered Gap Analysis</h3>
          <p className="skill-card-desc">
            Advanced machine learning algorithms analyze your skills against job requirements with precision and accuracy.
          </p>
        </div>
        {/* Personalized Learning */}
        <div className="skill-card skill-card-purple">
          <div className="skill-icon skill-icon-purple">
            <Target className="icon" />
          </div>
          <h3 className="skill-card-title">Personalized Learning Paths</h3>
          <p className="skill-card-desc">
            Get actionable, step-by-step learning plans tailored specifically to your career goals and current skill level.
          </p>
        </div>
        {/* Platform Integrations */}
        <div className="skill-card skill-card-pink">
          <div className="skill-icon skill-icon-pink">
            <Link className="icon" />
          </div>
          <h3 className="skill-card-title">Platform Integrations</h3>
          <p className="skill-card-desc">
            Seamlessly connect with LinkedIn, Coursera, Udemy, and other top learning platforms for unified progress tracking.
          </p>
        </div>
        {/* Role-Based Upskilling */}
        <div className="skill-card skill-card-green">
          <div className="skill-icon skill-icon-green">
            <Users className="icon" />
          </div>
          <h3 className="skill-card-title">Role-Based Upskilling</h3>
          <p className="skill-card-desc">
            Focus on skills that matter for your specific target role, not generic training that wastes your time.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="skill-cta">
        <div className="skill-cta-box">
          <h3 className="skill-cta-title">Ready to Bridge Your Skill Gap?</h3>
          <p className="skill-cta-desc">
            Join thousands of professionals who've accelerated their careers with SkillBridge
          </p>
          <button className="skill-cta-btn">
            Start Your Free Analysis
            <ArrowRight className="cta-arrow" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Skill;