import { ArrowDownRight, Github } from "lucide-react";
import { profile, socials } from "../data";
import { ExternalLink } from "./UI";
import ResumeButton from "./ResumeButton";
import EngineeringProfile from "./EngineeringProfile";
import MagneticLink from "./MagneticLink";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="hero">
      <div className="shell hero-grid">
        <div>
          <p className="availability">
            <span className="status-dot" />
            Available for Full-Stack / SDE Roles
          </p>
          <p className="eyebrow hero-intro">
            ADITHYA DIWANAD / SOFTWARE ENGINEER
          </p>
          <h1 id="hero-title">
            Turning ideas
            <br />
            into{" "}
            <span>
              working
              <br className="desktop-break" /> systems.
            </span>
          </h1>
          <p className="hero-description">
            Full-stack development. Thoughtful architecture.
            <br />
            AI that solves real problems.
          </p>
          <p className="hero-bio">{profile.bio}</p>
          <div className="hero-actions">
            <MagneticLink href="#projects" className="button-primary">
              View Projects
              <ArrowDownRight size={17} />
            </MagneticLink>
            <ResumeButton />
            <ExternalLink href={socials[0].url} className="button-secondary">
              <Github size={17} />
              GitHub
            </ExternalLink>
          </div>
        </div>
        <EngineeringProfile />
      </div>
      <div className="shell hero-bottom">
        <span>INFORMATION SCIENCE & ENGINEERING · CLASS OF 2027</span>
        <a href="#projects">Explore selected work ↓</a>
      </div>
    </section>
  );
}
