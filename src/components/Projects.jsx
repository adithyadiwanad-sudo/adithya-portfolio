import MotionCard from "./MotionCard";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { GitBranch } from "lucide-react";
import { projects, utilities } from "../data";
import { Badge, ProjectLink, SectionHeading } from "./UI";
function ProjectCard({ project, index }) {
  const pipeline = project.pipeline;
  return (
    <RevealItem>
      <MotionCard className="project-card">
        <div className="project-visual">
          <div className="project-visual-top">
            <span>SYS_{String(index + 1).padStart(2, "0")}</span>
            <GitBranch size={16} />
          </div>
          <div
            className="architecture"
            aria-label={`${project.name} architecture`}
          >
            {pipeline.map((step, i) => (
              <div key={step} className="architecture-step">
                <span
                  className={`architecture-node ${i === 1 ? "core-node" : ""}`}
                >
                  <span className="node-index">0{i + 1}</span>
                  {step}
                </span>
                {i < pipeline.length - 1 && (
                  <span className="architecture-connector" aria-hidden="true">
                    ↓
                  </span>
                )}
              </div>
            ))}
          </div>
          <span className="visual-caption">INPUT → PROCESS → OUTPUT</span>
        </div>
        <div className="project-content">
          <div className="project-meta">
            <span className="eyebrow">{project.category}</span>
            <span
              className={`project-status ${project.status ? "developing" : ""}`}
            >
              <span className="status-dot" />
              {project.status || "Source available"}
            </span>
          </div>
          <h3>{project.name}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <ul className="project-bullets">
            {project.bullets.map((b) => (
              <li key={b}>
                {b.split(/(\d+(?:\.\d+)?%)/g).map((part, i) =>
                  /\d%$/.test(part) ? (
                    <strong className="code-green" key={i}>
                      {part}
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <div className="project-links">
            <ProjectLink href={project.github} label="View source" />
            <ProjectLink href={project.demo} label="Live demo" />
          </div>
        </div>
      </MotionCard>
    </RevealItem>
  );
}

function MiniProjectCard({ project }) {
  return (
    <RevealItem className="mini-reveal">
      <MotionCard className="utility-card">
        <div className="mini-card-heading">
          <GitBranch size={18} aria-hidden="true" />
          <span className="project-date">
            {project.createdAt ? (
              <>
                Created{" "}
                <time dateTime={project.createdAt}>
                  {new Date(project.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
              </>
            ) : (
              "Creation date unavailable"
            )}
          </span>
        </div>
        <h4>{project.name}</h4>
        <p>{project.description || project.bullets?.[0] || project.subtitle}</p>
        <div className="mini-stack">
          {project.stack?.length ? (
            project.stack.map((tech) => <Badge key={tech}>{tech}</Badge>)
          ) : (
            <span className="stack-note">Tech stack not listed</span>
          )}
        </div>
        <div className="project-links">
          <ProjectLink
            href={project.github || project.url}
            label="Repository"
          />
          <ProjectLink href={project.demo} label="Demo" />
        </div>
      </MotionCard>
    </RevealItem>
  );
}

export default function Projects() {
  // Explicit content metadata owns the hierarchy; array order does not.
  const featured = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.showcaseOrder - b.showcaseOrder);
  const mini = [
    ...projects.filter(
      (project) => project.name === "Student Performance Predictor",
    ),
    ...utilities.filter(
      (project) => project.name === "Passport Tracking Management",
    ),
    ...projects.filter(
      (project) =>
        !project.featured && project.name !== "Student Performance Predictor",
    ),
    ...utilities.filter(
      (project) => project.name !== "Passport Tracking Management",
    ),
  ];
  return (
    <section id="projects" className="shell section-space">
      <SectionHeading number="01" title="Major showcase projects">
        Selected systems / {String(featured.length).padStart(2, "0")}
      </SectionHeading>
      <RevealGroup className="project-list">
        {featured.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </RevealGroup>
      <Reveal className="utility-heading">
        <div>
          <p className="eyebrow">
            MORE FROM THE WORKBENCH / {String(mini.length).padStart(2, "0")}
          </p>
          <h3>Mini / Secondary Projects</h3>
        </div>
        <span className="eyebrow">Focused builds. Practical ideas.</span>
      </Reveal>
      <RevealGroup className="utility-grid">
        {mini.map((project) => (
          <MiniProjectCard key={project.name} project={project} />
        ))}
      </RevealGroup>
    </section>
  );
}
