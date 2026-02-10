import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import "../styles/navbar.css";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme(); // THEME HOOK

  // Scroll effect for glass navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* MENU BUTTON - TOP LEFT */}
        <button
          className="menu-btn left"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* LOGO */}
        <a href="#home" className="logo">
          <span></span>
        </a>

        {/* NAV LINKS */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
        </ul>

        {/* THEME TOGGLE BUTTON - TOP RIGHT */}
        <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
