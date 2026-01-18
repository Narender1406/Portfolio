import "../styles/skills.css";

const skills = [
  { name: "HTML", level: 60 },
  { name: "CSS", level: 55 },
  { name: "JavaScript", level: 50 },
  { name: "React", level: 25 },
  { name: "TypeScript", level: 20 },
  { name: "Git & GitHub", level: 30 },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
