import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-wrapper">

        <Link to="/" className="logo" onClick={close}>
          Aditya<span>.</span>
        </Link>

        <div className={`nav-menu${menuOpen ? " open" : ""}`}>
          <NavLink to="/"        onClick={close} className={({ isActive }) => isActive ? "active" : ""} end>Home</NavLink>
          <NavLink to="/about"   onClick={close} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          <NavLink to="/skills"  onClick={close} className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink>
          <NavLink to="/projects"onClick={close} className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
          <NavLink to="/contact" onClick={close} className={({ isActive }) => isActive ? "active nav-cta" : "nav-cta"}>Hire Me</NavLink>
        </div>

        <div
          className={`hamburger${menuOpen ? " active" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;