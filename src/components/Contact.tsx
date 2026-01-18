import { Mail, Github, Linkedin, Phone } from "lucide-react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">
          Feel free to reach out for opportunities, collaboration, or queries.
        </p>

        <div className="contact-grid">
          <a href="mailto:nk2616563@gmail.com" className="contact-card">
            <Mail />
            <span>nk2616563@gmail.com</span>
          </a>

          <a href="tel:6309870939" className="contact-card">
            <Phone />
            <span>+91 6309870939</span>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="contact-card"
          >
            <Github />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="contact-card"
          >
            <Linkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
