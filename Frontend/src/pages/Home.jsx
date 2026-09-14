import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        {/* Left column: Copy & CTA */}
        <div className="hero-content">
          <div className="badge-pill">
            <span className="badge-dot"></span> AI-Powered Career Platform
          </div>

          <h1 className="hero-title">
            Land your dream job <span className="highlight-text">3x faster</span> with your career copilot.
          </h1>

          <p className="hero-subtitle">
            WorkWay matches you with vetted roles, optimizes your resume for ATS, and tracks every application in one place.
          </p>

          <div className="hero-actions">
            <Link to="/jobs" className="btn-primary-cta">Explore Jobs</Link>
            <Link to="/tracker" className="btn-secondary-cta">Track Applications</Link>
          </div>

          <div className="hero-proof">
            <div className="stars">★★★★★</div>
            <span><strong>4.9/5</strong> rating from ambitious job seekers</span>
          </div>
        </div>

        {/* Right column: Interactive Visual Card (Like Simplify) */}
        <div className="hero-visual">
          <div className="preview-card">
            <div className="card-header">
              <span className="card-status">Application in progress</span>
              <span className="card-badge">Match: 95%</span>
            </div>
            
            <div className="job-snippet">
              <div className="company-avatar">W</div>
              <div>
                <h4>Senior Frontend Engineer</h4>
                <p>WorkWay • Remote • $140k - $180k</p>
              </div>
            </div>

            <div className="card-progress">
              <div className="progress-labels">
                <span>Resume ATS Compatibility</span>
                <span>95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="keyword-tags">
              <span className="tag">✓ React 19</span>
              <span className="tag">✓ JavaScript</span>
              <span className="tag">✓ System Design</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
