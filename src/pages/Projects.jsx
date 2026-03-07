import { useEffect, useState, useRef } from "react";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const revealRef = useRef([]);

  useEffect(() => {
    fetch("https://api.github.com/users/31ADTA/repos?per_page=100&sort=updated")
      .then((res) => {
        if (!res.ok) throw new Error("Unable to load repositories");
        return res.json();
      })
      .then((data) => {
        const live = data
          .filter((repo) => repo.homepage)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 9);
        setRepos(live);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (loading) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    revealRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [loading]);

  const r = (el) => {
    if (el && !revealRef.current.includes(el)) revealRef.current.push(el);
  };

  const getTech = (repo) => {
    const tech = [];
    if (repo.language) tech.push(repo.language);
    if (Array.isArray(repo.topics)) tech.push(...repo.topics.slice(0, 3));
    return [...new Set(tech)].slice(0, 4);
  };

  return (
    <div className="page projects-section">
      <div ref={r} className="reveal">
        <span className="section-label">Portfolio</span>
        <h1 className="section-title">Selected project work</h1>
        <p className="section-subtitle">
          Live applications and repositories focused on usability, engineering quality,
          and real-world implementation.
        </p>
      </div>

      {loading && <p style={{ marginTop: 30, color: "var(--text-muted)" }}>Loading projects...</p>}

      {error && (
        <p style={{ marginTop: 30, color: "var(--text-muted)" }}>
          Unable to fetch projects right now. Please view my GitHub profile directly.
        </p>
      )}

      {!loading && !error && repos.length === 0 && (
        <p style={{ marginTop: 30, color: "var(--text-muted)" }}>
          No published projects with live demo links were found.
        </p>
      )}

      <div className="projects-grid">
        {repos.map((repo) => {
          const tech = getTech(repo);
          return (
            <article key={repo.id} ref={r} className="project-card reveal">
              <div className="project-head">
                <strong>{repo.name.replace(/-/g, " ")}</strong>
                <span className="project-tag">{repo.language || "Project"}</span>
              </div>
              <div className="project-body">
                <p className="project-desc">
                  {repo.description ||
                    "Deployed project with a focus on practical implementation and maintainable code."}
                </p>

                {tech.length > 0 && (
                  <div className="project-tech">
                    {tech.map((item) => (
                      <span key={item} className="tech-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-buttons">
                  <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn-demo">
                    Live Demo
                  </a>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-source">
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
