import { ArrowUpRight, Github } from "lucide-react";
import { profile, socials } from "../data";
import StatusDot from "./StatusDot";
import ResumeButton from "./ResumeButton";
import FloatingProfile from "./FloatingProfile";
import Reveal from "./Reveal";
import MagneticLink from "./MagneticLink";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="hero">
      <div className="shell hero-grid">
        <div>
          <Reveal onLoad direction="down">
            <p className="availability">
              <StatusDot />
              Available for Full-Stack / SDE Roles
            </p>
          </Reveal>
          <Reveal onLoad delay={0.05}>
            <p className="eyebrow hero-intro">
              ADITHYA DIWANAD / SOFTWARE ENGINEER
            </p>
          </Reveal>
          <Reveal onLoad delay={0.1}>
            <h1 id="hero-title">
              Turning ideas
              <br />
              into{" "}
              <span>
                working
                <br className="desktop-break" /> systems.
              </span>
            </h1>
          </Reveal>
          <Reveal onLoad delay={0.1}>
            <p className="hero-description">
              Full-stack development. Thoughtful architecture.
              <br />
              AI that solves real problems.
            </p>
            <p className="hero-bio">{profile.bio}</p>
          </Reveal>
          <Reveal onLoad delay={0.2} className="hero-actions">
            <MagneticLink href="#projects" className="button-primary">
              View Projects
              <ArrowUpRight
                size={17}
                className="cta-arrow"
                aria-hidden="true"
              />
            </MagneticLink>
            <ResumeButton />
            <MagneticLink
              href={socials[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              <Github size={17} />
              GitHub{" "}
              <ArrowUpRight
                size={17}
                className="cta-arrow"
                aria-hidden="true"
              />
            </MagneticLink>
          </Reveal>
        </div>
        <Reveal onLoad delay={0.25} className="profile-entrance">
          <FloatingProfile />
        </Reveal>
      </div>
      <div className="shell hero-bottom">
        <span>INFORMATION SCIENCE & ENGINEERING · CLASS OF 2027</span>
        <a href="#projects">Explore selected work ↓</a>
      </div>
    </section>
  );
}
