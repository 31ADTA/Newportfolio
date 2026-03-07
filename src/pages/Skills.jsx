import { useEffect, useRef } from "react";

const skillGroups = [
  {
    icon: "💻",
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5 / CSS3", level: 94 },
      { name: "Responsive UI Design", level: 92 },
    ],
  },
  {
    icon: "⚙️",
    title: "Backend & APIs",
    skills: [
      { name: "Python", level: 86 },
      { name: "Node.js", level: 76 },
      { name: "REST API Integration", level: 84 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    icon: "📊",
    title: "Data & Insights",
    skills: [
      { name: "Pandas / NumPy", level: 85 },
      { name: "Power BI", level: 79 },
      { name: "Scikit-learn", level: 73 },
      { name: "Data Visualization", level: 83 },
    ],
  },
  {
    icon: "🧰",
    title: "Tools & Workflow",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Vercel Deployment", level: 85 },
      { name: "Vite", level: 82 },
      { name: "VS Code", level: 95 },
    ],
  },
];

function Skills() {
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
    <div className="page skills-section">
      <div ref={r} className="reveal">
        <span className="section-label">Capabilities</span>
        <h1 className="section-title">Technical strengths</h1>
        <p className="section-subtitle">
          A balanced stack covering frontend delivery, backend integration, and
          analytics-driven decision support.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} ref={r} className="skill-card reveal">
            <div className="card-icon">{group.icon}</div>
            <h3 className="skill-name">{group.title}</h3>
            <div style={{ display: "grid", gap: 12 }}>
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".86rem", color: "var(--text-soft)" }}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div style={{ height: 7, borderRadius: 100, background: "var(--surface-alt)", marginTop: 6 }}>
                    <div style={{ width: `${skill.level}%`, height: "100%", borderRadius: 100, background: "var(--primary)" }}></div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Skills;
