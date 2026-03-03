import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import profile from "../assets/profile.jpeg";

function Home() {
  const revealRef = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.08 });
    revealRef.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const r = (el) => { if (el && !revealRef.current.includes(el)) revealRef.current.push(el); };

  return (
    <section className="home-section">
      <div className="home-container">

        {/* LEFT */}
        <div className="home-left">
          <div className="home-eyebrow">
            <span className="home-eyebrow-dot"></span>
            Available for Projects
          </div>

          <h1>
            Hi, I'm <span className="home-highlight">Aditya Tale</span>
          </h1>

          <h2 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 400, color: "var(--text-secondary)", marginBottom: "20px", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0" }}>
            Full Stack Developer &amp; Data Analyst
          </h2>

          <p>
            I build scalable web applications and transform complex data into
            actionable business insights. Passionate about clean architecture,
            performance, and real-world problem solving.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn-hero-primary">View Projects</Link>
            <Link to="/contact"  className="btn-hero-secondary">
              Contact Me
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">2+ yrs</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">Dedication</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="home-right">
          <div className="profile-frame">
            <img src={profile} alt="Aditya Tale" className="profile-img" />
            <div className="profile-badge">
              <span className="badge-dot"></span>
              Open to work
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;