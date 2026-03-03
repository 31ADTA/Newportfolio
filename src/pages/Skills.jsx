import { useEffect, useRef } from "react";

const skillGroups = [
  {
    icon: "✦", title: "Frontend Development",
    skills: [
      { name: "React.js",           level: 90 },
      { name: "JavaScript (ES6+)",  level: 88 },
      { name: "HTML5 & CSS3",       level: 95 },
      { name: "Responsive Design",  level: 92 },
    ]
  },
  {
    icon: "⬡", title: "Backend & Programming",
    skills: [
      { name: "Python",     level: 85 },
      { name: "Node.js",    level: 75 },
      { name: "REST APIs",  level: 82 },
      { name: "SQL",        level: 78 },
    ]
  },
  {
    icon: "◈", title: "Data & Machine Learning",
    skills: [
      { name: "Pandas & NumPy",   level: 85 },
      { name: "Matplotlib",       level: 80 },
      { name: "Scikit-learn",     level: 72 },
      { name: "Power BI",         level: 78 },
    ]
  },
  {
    icon: "⊕", title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Vercel",       level: 85 },
      { name: "VS Code",      level: 95 },
      { name: "Vite",         level: 80 },
    ]
  },
];

function Skills() {
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
    <div className="page skills-section">

      <div ref={r} className="reveal">
        <div className="section-label">Expertise</div>
        <h1 className="section-title">Technical Skills</h1>
        <p className="section-subtitle">
          Core technologies and tools I use to build and ship products — from
          frontend interfaces to backend systems and data pipelines.
        </p>
      </div>

      <div className="skills-grid" style={{ marginTop: "48px" }}>
        {skillGroups.map((group, gi) => (
          <div key={gi} ref={r} className="skill-card reveal">
            <div className="card-icon">{group.icon}</div>
            <div className="skill-name">{group.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "4px" }}>
              {group.skills.map((s, si) => (
                <div key={si}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 500 }}>{s.name}</span>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600 }}>{s.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${s.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Skills;