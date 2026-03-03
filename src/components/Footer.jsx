import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-copy">© {year} Aditya Tale — Full Stack Developer &amp; Data Analyst</div>
      <div className="footer-links">
        <a href="https://github.com/31ADTA" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/aditya-tale-734614299" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:adityatale3107@gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;