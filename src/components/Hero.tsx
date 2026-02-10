import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import "../styles/hero.css";
import profile from "../assets/profile.jpg";

const roles = [
  "Frontend Developer",
  "React Developer",
  "TypeScript Enthusiast",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (charIndex < currentRole.length) {
      const t = setTimeout(() => {
        setText((p) => p + currentRole[charIndex]);
        setCharIndex((i) => i + 1);
      }, 80);
      return () => clearTimeout(t);
    } else {
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, roleIndex]);

  // Mouse parallax
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setOffset({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-glow" />

      {/* Avatar orbit */}
      <div
        className="hero-orbit"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        <div className="hero-photo">
          <img src={profile} alt="Narender Kolipaka" />
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-name">
          Narender <span>Kolipaka</span>
        </h1>

        <p className="hero-subtitle">
          <span className="typing-text">{text}</span>
          <span className="cursor">|</span>
        </p>

        <div className="hero-buttons">
          <a
            href="/Narender_Kolipaka_Resume.pdf"
            download
            className="btn primary"
          >
            Download Resume
          </a>
          <a href="#projects" className="btn secondary">
            View Projects
          </a>
        </div>

        <div className="hero-icons">
          <a href="mailto:nk2616563@gmail.com"><Mail /></a>
          <a href="#" target="_blank"><Github /></a>
          <a href="#" target="_blank"><Linkedin /></a>
        </div>

        <div className="scroll-indicator">
          <ArrowDown />
        </div>
      </div>
    </section>
  );
}
