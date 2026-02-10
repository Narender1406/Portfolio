import { useEffect, useRef } from "react";
import "../styles/skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 60, icon: "🌐" },
      { name: "CSS", level: 55, icon: "🎨" },
      { name: "JavaScript", level: 50, icon: "⚡" },
      { name: "React", level: 25, icon: "⚛️" },
      { name: "TypeScript", level: 20, icon: "🧩" },
    ],
  },
  {
    title: "Tools",
    skills: [{ name: "Git & GitHub", level: 30, icon: "🛠️" }],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <h2 className="section-title">Skills</h2>

      {skillGroups.map((group, i) => (
        <div className="skill-group" key={i}>
          <h3 className="group-title">{group.title}</h3>

          <div className="skills-grid">
            {group.skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-header">
                  <span className="skill-name">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="skill-level">{skill.level}%</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
