import { useEffect, useRef } from "react";

const strengths = [
  { icon: "⬡", title: "Clean & Scalable Code",        desc: "Writing maintainable, well-structured code that scales with business needs." },
  { icon: "◈", title: "Problem Solving",               desc: "Breaking down complex challenges into elegant, efficient solutions." },
  { icon: "✦", title: "Data-Driven Decisions",         desc: "Translating raw data into meaningful insights that drive outcomes." },
  { icon: "⊕", title: "Responsive UI Development",     desc: "Crafting pixel-precise interfaces that work flawlessly on any device." },
  { icon: "◎", title: "API Integration",               desc: "Connecting systems seamlessly with RESTful APIs and backend logic." },
  { icon: "◷", title: "Continuous Learning",           desc: "Staying at the forefront of technology through constant skill development." },
];

function About() {
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
    <div className="page about-section">

      <div ref={r} className="reveal">
        <div className="section-label">About Me</div>
        <h1 className="section-title">Turning ideas into impact</h1>
        <p className="section-subtitle">
          I'm a Full Stack Developer and Data Analyst passionate about building
          scalable web applications and delivering data-driven solutions.
        </p>
      </div>

      <div ref={r} className="reveal" style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
        <div>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.85", marginBottom: "20px" }}>
            With a strong foundation in modern web technologies and data analytics,
            I focus on writing clean, maintainable code and solving real-world
            business problems.
          </p>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.85", marginBottom: "20px" }}>
            My experience includes developing responsive applications, working with
            REST APIs, and performing advanced data analysis using Python and
            machine learning techniques.
          </p>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.85" }}>
            I continuously strive to improve my technical skills while maintaining
            a problem-solving mindset and strong attention to detail.
          </p>

          <div style={{ marginTop: "36px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="mailto:adityatale3107@gmail.com" className="btn-hero-primary" style={{ fontSize: "14px", padding: "11px 22px" }}>
              Get in Touch
            </a>
            <a href="https://github.com/31ADTA" target="_blank" rel="noopener noreferrer" className="btn-hero-secondary" style={{ fontSize: "14px", padding: "10px 22px" }}>
              GitHub Profile
            </a>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {[
            { label: "Location", value: "India" },
            { label: "Role",     value: "Full Stack Dev" },
            { label: "Focus",    value: "Web & Data" },
            { label: "Status",   value: "Open to Work" },
          ].map(item => (
            <div key={item.label} className="about-card" style={{ padding: "22px 20px" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "8px" }}>{item.label}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "16px", fontWeight: 700, color: "var(--text-primary)" }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div ref={r} className="reveal" style={{ marginTop: "80px" }}>
        <div className="section-label">Core Strengths</div>
        <h2 className="section-title">What I bring to the table</h2>
      </div>

      <div ref={r} className="reveal skills-grid">
        {strengths.map((s, i) => (
          <div key={i} className="skill-card">
            <div className="card-icon">{s.icon}</div>
            <div className="skill-name">{s.title}</div>
            <div className="skill-desc">{s.desc}</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default About;