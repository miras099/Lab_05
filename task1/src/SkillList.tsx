import type { Skill } from "./types";

interface SkillListProps {
  skills: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>
          <span
            style={{
              color:
                skill.level === "Expert"
                  ? "green"
                  : skill.level === "Intermediate"
                  ? "orange"
                  : "gray"
            }}
          >
            {skill.name} - {skill.level}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
