import "../styles/experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Frontend Developer Intern</h3>
              <span className="timeline-company">Lupyd</span>
              <span className="timeline-date">July 2025 – Present</span>

              <p>
                Working on responsive UI development, performance-focused
                frontend features, and collaborative improvements using
                React, TypeScript, and modern CSS practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
