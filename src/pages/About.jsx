import { useEffect, useRef } from "react";

const experience = [
  {
    period: "2024 — Present",
    role: "Full Stack Developer",
    company: "Freelance & Independent Projects",
    summary:
      "Delivered production-ready web solutions with React, APIs, and analytics modules for business workflows.",
  },
  {
    period: "2023 — 2024",
    role: "Data Analytics Practitioner",
    company: "Academic & Industry Case Projects",
    summary:
      "Built dashboards and predictive models that translated raw data into clear recommendations.",
  },
  {
    period: "2022 — 2023",
    role: "Software Development Training",
    company: "Self-driven Professional Upskilling",
    summary:
      "Focused on frontend systems, backend fundamentals, and clean software engineering practices.",
  },
];

const process = [
  { title: "Discovery", desc: "Align on goals, stakeholders, constraints, and measurable success criteria." },
  { title: "Planning", desc: "Define architecture, milestones, delivery timeline, and communication cadence." },
  { title: "Delivery", desc: "Build, test, and deploy robust solutions with a focus on maintainability." },
];

function About() {
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
    <div className="page about-section">
      <div ref={r} className="reveal">
        <span className="section-label">About</span>
        <h1 className="section-title">Professional profile</h1>
        <p className="section-subtitle">
          I combine software engineering and analytics expertise to build digital
          solutions that improve operational efficiency and user experience.
        </p>
      </div>

      <div className="about-layout">
        <article ref={r} className="about-summary reveal card">
          <h3 className="timeline-title">Business-focused technical partner</h3>
          <p className="section-subtitle">
            I work across the full product lifecycle—from requirement analysis to
            production deployment—while maintaining high standards for code
            quality, responsiveness, and collaboration.
          </p>
          <ul className="about-list">
            <li>Strong proficiency in React, JavaScript, Python, and REST APIs.</li>
            <li>Hands-on with data visualization, reporting, and ML-based insights.</li>
            <li>Experience delivering responsive interfaces for web and mobile users.</li>
          </ul>
        </article>

        <article ref={r} className="about-summary reveal card">
          <h3 className="timeline-title">Core professional principles</h3>
          <ul className="business-list">
            <li>Ownership mindset with proactive communication.</li>
            <li>Structured problem solving and clean architectural choices.</li>
            <li>Reliable delivery with focus on business impact.</li>
            <li>Continuous improvement and adaptability to project needs.</li>
          </ul>
        </article>
      </div>

      <section ref={r} className="reveal" style={{ marginTop: 44 }}>
        <span className="section-label">Experience timeline</span>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.period} className="timeline-item">
              <div className="timeline-time">{item.period}</div>
              <div>
                <h3 className="timeline-title">{item.role}</h3>
                <div className="timeline-company">{item.company}</div>
                <p className="section-subtitle">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section ref={r} className="reveal" style={{ marginTop: 44 }}>
        <span className="section-label">Delivery framework</span>
        <div className="process-grid">
          {process.map((step, index) => (
            <article key={step.title} className="process-step">
              <div className="section-label" style={{ marginBottom: 8 }}>Step {index + 1}</div>
              <h3 className="timeline-title">{step.title}</h3>
              <p className="section-subtitle">{step.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
