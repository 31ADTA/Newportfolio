import { useEffect, useState, useRef } from "react";

function Projects() {
  const [repos, setRepos]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);
  const revealRef = useRef([]);

  useEffect(() => {
    fetch("https://api.github.com/users/31ADTA/repos?per_page=100&sort=updated")
      .then(res => { if (!res.ok) throw new Error(); return res.json(); })
      .then(data => {
        const live = data
          .filter(r => r.homepage)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(live);
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  useEffect(() => {
    if (!loading) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
      }, { threshold: 0.08 });
      revealRef.current.forEach(el => el && io.observe(el));
      return () => io.disconnect();
    }
  }, [loading]);

  const r = (el) => { if (el && !revealRef.current.includes(el)) revealRef.current.push(el); };

  // Derive tech pills from repo topics or language
  const getTech = (repo) => {
    const pills = [];
    if (repo.language) pills.push(repo.language);
    if (repo.topics)   pills.push(...repo.topics.slice(0, 3));
    return [...new Set(pills)].slice(0, 4);
  };

  return (
    <div className="page projects-section">

      <div ref={r} className="reveal">
        <div className="section-label">Work</div>
        <h1 className="section-title">Featured Projects</h1>
        <p className="section-subtitle">
          A selection of my deployed applications and data projects, pulled live from GitHub.
        </p>
      </div>

      {loading && (
        <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-muted)" }}>
          <div style={{ fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase" }}>Loading projects…</div>
        </div>
      )}

      {error && (
        <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-muted)" }}>
          <div>Couldn't load projects. <a href="https://github.com/31ADTA" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>View on GitHub →</a></div>
        </div>
      )}

      {!loading && !error && repos.length === 0 && (
        <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-muted)" }}>
          <div>No deployed projects found yet. <a href="https://github.com/31ADTA" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>See all repos →</a></div>
        </div>
      )}

      <div className="projects-grid" style={{ marginTop: "48px" }}>
        {repos.map((repo, i) => {
          const tech = getTech(repo);
          return (
            <div key={repo.id} ref={r} className="project-card reveal">
              {/* Decorative header band */}
              <div style={{
                height: "140px", background: `linear-gradient(135deg, #0d1a2d ${i % 3 === 0 ? "0%" : "20%"}, #111c30 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderBottom: "1px solid var(--border)", overflow: "hidden", position: "relative"
              }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "36px", fontWeight: 800, color: "rgba(47,124,246,0.12)", letterSpacing: "-0.04em", userSelect: "none" }}>
                  {repo.name.slice(0, 2).toUpperCase()}
                </div>
                <div style={{ position: "absolute", top: "12px", right: "12px" }}>
                  <span className="project-tag">{repo.language || "Project"}</span>
                </div>
              </div>

              <div className="project-body">
                <div className="project-title">{repo.name.replace(/-/g, " ")}</div>
                <div className="project-desc">
                  {repo.description || "A deployed project. Click below to see it live or explore the source code."}
                </div>

                {tech.length > 0 && (
                  <div className="project-tech">
                    {tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                  </div>
                )}

                <div className="project-buttons">
                  <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn-demo">
                    Live Demo
                  </a>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-source">
                    Source
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Projects;