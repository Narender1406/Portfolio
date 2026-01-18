import "../styles/projects.css";

const projects = [
  {
    title: "LUPYD Social Platform",
    description:
      "Secure and scalable social platform with encrypted chats, groups, and real-time updates.",
    tech: ["React", "TypeScript", "CSS", "REST API"],
    link: "#",
  },
  {
    title: "Job Portal Frontend",
    description:
      "Frontend job listing platform with job cards, filters, and save functionality.",
    tech: ["TypeScript", "HTML", "CSS","React"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Professional developer portfolio built with React and TypeScript.",
    tech: ["React", "TypeScript", "CSS"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a href={project.link} className="project-link">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
