import { useEffect, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "adityatale3107@gmail.com",
    href: "mailto:adityatale3107@gmail.com",
    cta: "Send Email",
    primary: true,
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/aditya-tale-734614299",
    href: "https://www.linkedin.com/in/aditya-tale-734614299",
    cta: "Connect",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+91 98340 23244",
    href: "https://wa.me/919834023244",
    cta: "Start Chat",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/31ADTA",
    href: "https://github.com/31ADTA",
    cta: "View Work",
  },
];

function Contact() {
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
    <div className="page contact-section">
      <div ref={r} className="reveal">
        <span className="section-label">Contact</span>
        <h1 className="section-title">Let's discuss your requirements</h1>
        <p className="section-subtitle">
          If you are hiring, planning a project, or looking for a dependable
          developer for your team, feel free to reach out.
        </p>
      </div>

      <div className="contact-layout">
        <article ref={r} className="contact-summary reveal card">
          <h3 className="timeline-title">Engagement details</h3>
          <ul className="business-list">
            <li>Open to full-time, remote, and contract opportunities.</li>
            <li>Comfortable collaborating with product, design, and engineering teams.</li>
            <li>Typical response time: within 24 hours on business days.</li>
          </ul>
          <div className="contact-buttons" style={{ marginTop: 20 }}>
            <a href="mailto:adityatale3107@gmail.com" className="contact-btn contact-btn-primary">
              Email Now
            </a>
            <a href="https://www.linkedin.com/in/aditya-tale-734614299" target="_blank" rel="noopener noreferrer" className="contact-btn">
              LinkedIn Message
            </a>
          </div>
        </article>

        <article ref={r} className="contact-summary reveal card">
          <h3 className="timeline-title">Best for</h3>
          <ul className="business-list">
            <li>Corporate web applications and dashboard development.</li>
            <li>Frontend modernization and responsive UI upgrades.</li>
            <li>Data reporting and analytics-driven feature planning.</li>
          </ul>
        </article>
      </div>

      <div className="contact-grid">
        {contacts.map((item) => (
          <article key={item.label} ref={r} className="contact-card reveal">
            <div className="card-icon">{item.icon}</div>
            <div className="contact-card-label">{item.label}</div>
            <h3 className="contact-card-value">{item.value}</h3>
            <a
              href={item.href}
              target={item.primary ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`contact-btn${item.primary ? " contact-btn-primary" : ""}`}
            >
              {item.cta}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Contact;
