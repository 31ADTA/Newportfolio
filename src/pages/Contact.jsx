import { useEffect, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

function Contact() {
  const revealRef = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.08 });
    revealRef.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const r = (el) => { if (el && !revealRef.current.includes(el)) revealRef.current.push(el); };

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
      value: "aditya-tale-734614299",
      href: "https://www.linkedin.com/in/aditya-tale-734614299",
      cta: "Connect",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "+91 98340 23244",
      href: "https://wa.me/919834023244",
      cta: "Message",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/31ADTA",
      href: "https://github.com/31ADTA",
      cta: "View Profile",
    },
  ];

  return (
    <div className="page contact-section">

      <div ref={r} className="reveal">
        <div className="section-label">Let's Talk</div>
        <h1 className="section-title">Get in touch</h1>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you.
          I typically respond within 24 hours.
        </p>
      </div>

      <div className="contact-grid" ref={r} style={{ marginTop: "52px" }}>
        {contacts.map((c, i) => (
          <div key={i} className="contact-card reveal" ref={r}>
            <div className="card-icon" style={{ fontSize: "18px" }}>{c.icon}</div>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)" }}>{c.label}</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", wordBreak: "break-all" }}>{c.value}</div>
            <a
              href={c.href}
              target={c.primary ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`contact-btn${c.primary ? " contact-btn-primary" : ""}`}
              style={{ marginTop: "8px", fontSize: "13px", padding: "9px 18px" }}
            >
              {c.cta}
            </a>
          </div>
        ))}
      </div>

      <div ref={r} className="reveal" style={{
        marginTop: "64px", padding: "40px", background: "var(--card-bg)",
        borderRadius: "var(--radius-lg)", border: "1px solid var(--border)",
        textAlign: "center"
      }}>
        <div className="section-label" style={{ justifyContent: "center" }}>Response Time</div>
        <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "22px", marginBottom: "12px" }}>Usually within 24 hours</h3>
        <p style={{ fontSize: "15px", color: "var(--text-secondary)", maxWidth: "420px", margin: "0 auto" }}>
          Whether it's a full project, a quick question, or a freelance opportunity —
          don't hesitate to reach out.
        </p>
      </div>

    </div>
  );
}

export default Contact;