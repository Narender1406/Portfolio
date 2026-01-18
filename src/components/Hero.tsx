import { Github, Linkedin, Mail } from "lucide-react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Glow Background */}
      <div className="hero-glow"></div>

      {/* Circular Image */}
      <div className="hero-bg-circle"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>Narender Kolipaka</h1>

        <p className="hero-subtitle typing">
          Frontend Developer · React & TypeScript
        </p>

        <div className="hero-icons">
          <a href="mailto:nk2616563@gmail.com">
            <Mail />
          </a>
          <a href="#" target="_blank">
            <Github />
          </a>
          <a href="#" target="_blank">
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
