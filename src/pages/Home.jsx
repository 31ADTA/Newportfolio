import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import profile from "../assets/profile.jpeg";

const highlights = [
  { title: "Enterprise-ready development", desc: "Secure, scalable, and maintainable application architecture for long-term growth." },
  { title: "Business-first execution", desc: "Every feature is tied to measurable outcomes, user needs, and product KPIs." },
  { title: "Clear communication", desc: "Transparent updates, defined milestones, and reliable delivery timelines." },
];

const services = [
  { title: "Web Application Development", desc: "Building modern React-based applications with robust backend integrations." },
  { title: "Data Analytics & Dashboards", desc: "Converting complex datasets into actionable dashboards and executive insights." },
  { title: "Performance Optimization", desc: "Improving speed, accessibility, and technical quality for better user retention." },
];

function Home() {
  const revealRef = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    revealRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const r = (el) => {
    if (el && !revealRef.current.includes(el)) revealRef.current.push(el);
  };

  return (
    <>
      <section className="home-section">
        <div className="home-container">
          <div className="home-left">
            <div className="home-eyebrow">
              <span className="home-eyebrow-dot"></span>
              Available for full-time and contract roles
            </div>
            <h1>
              Hi, I'm <span className="home-highlight">Aditya Tale</span>
            </h1>
            <p className="home-role">Full Stack Developer &amp; Data Analyst</p>
            <p>
              I design and deliver professional digital products that balance clean
              engineering, intuitive interfaces, and measurable business impact.
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn-hero-primary">
                Explore Portfolio
              </Link>
              <Link to="/contact" className="btn-hero-secondary">
                Schedule a Discussion
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <div className="stat-value">12+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div>
                <div className="stat-value">2+ Years</div>
                <div className="stat-label">Professional Experience</div>
              </div>
              <div>
                <div className="stat-value">8+</div>
                <div className="stat-label">Core Technologies</div>
              </div>
            </div>
          </div>

          <div className="home-right">
            {/* FIXED: The ref={r} is now on the correct element alongside the 'reveal' class */}
            <div className="profile-frame reveal" ref={r}>
              <img src={profile} alt="Aditya Tale" className="profile-img" />
              <div className="profile-badge">
                <span className="badge-dot"></span>
                Open to work
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page">
        <div ref={r} className="reveal">
          <span className="section-label">Why work with me</span>
          <h2 className="section-title">Professional approach tailored for corporate teams</h2>
        </div>
        <div className="highlights-grid">
          {highlights.map((item) => (
            <article key={item.title} ref={r} className="about-card reveal">
              <h3 className="timeline-title">{item.title}</h3>
              <p className="section-subtitle">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page" style={{ paddingTop: 0 }}>
        <div ref={r} className="reveal">
          <span className="section-label">Services</span>
          <h2 className="section-title">What I can deliver for your organization</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} ref={r} className="service-card reveal">
              <h3 className="timeline-title">{service.title}</h3>
              <p className="section-subtitle">{service.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
