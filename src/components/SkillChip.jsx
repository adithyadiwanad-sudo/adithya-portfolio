import MotionCard from "./MotionCard";
import {
  Database,
  Code2,
  Network,
  Cpu,
  Braces,
  AudioLines,
  Sparkles,
} from "lucide-react";
import { FaJava, FaCss3Alt } from "react-icons/fa6";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTailwindcss,
  SiGit,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
  SiEjs,
  SiFlask,
  SiMongoose,
  SiSpringboot,
  SiGithub,
  SiPostman,
  SiApachekafka,
  SiScikitlearn,
} from "react-icons/si";

// Brand assets are bundled SVGs. Generic CS concepts use semantic icons;
// SQL is a language, so it uses a database symbol rather than a vendor logo.
const technologies = {
  Java: [FaJava, "#D56619"],
  JavaScript: [SiJavascript, "#B28A00"],
  Python: [SiPython, "#3776AB"],
  "React.js": [SiReact, "#087EA4"],
  "Node.js": [SiNodedotjs, "#43853D"],
  "Express.js": [SiExpress, "#111827"],
  MongoDB: [SiMongodb, "#47A248"],
  "Tailwind CSS": [SiTailwindcss, "#06B6D4"],
  Git: [SiGit, "#F05032"],
  HTML5: [SiHtml5, "#E34F26"],
  CSS3: [FaCss3Alt, "#1572B6"],
  Bootstrap: [SiBootstrap, "#7952B3"],
  EJS: [SiEjs, "#64712D"],
  Flask: [SiFlask, "#111827"],
  Mongoose: [SiMongoose, "#880000"],
  "Spring Boot": [SiSpringboot, "#6DB33F"],
  GitHub: [SiGithub, "#181717"],
  Postman: [SiPostman, "#FF6C37"],
  Kafka: [SiApachekafka, "#231F20"],
  "Scikit-learn": [SiScikitlearn, "#F7931E"],
  SQL: [Database, "#0369A1"],
  "VS Code": [Code2, "#007ACC"],
  "Computer Networks": [Network, "#0369A1"],
  "Operating Systems": [Cpu, "#0369A1"],
  "REST APIs": [Network, "#0369A1"],
  Whisper: [AudioLines, "#047857"],
  "GenAI workflows": [Sparkles, "#047857"],
};
export default function SkillChip({ name }) {
  const [Logo, color] = technologies[name] || [Braces, "#0284C7"];
  return (
    <MotionCard
      as="span"
      compact
      className="skill-chip"
      style={{ "--brand-color": color }}
    >
      <Logo size={23} aria-hidden="true" className="skill-logo" />
      <span>{name}</span>
    </MotionCard>
  );
}
