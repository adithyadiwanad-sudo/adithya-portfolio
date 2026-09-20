import { ArrowUpRight, Plus } from "lucide-react";
import { certifications } from "../data";
import { ExternalLink, SectionHeading } from "./UI";
export default function Background() {
  return (
    <section id="background" className="shell section-space">
      <SectionHeading number="03" title="A foundation in building">
        Experience & education
      </SectionHeading>
      <div className="background-grid">
        <div className="timeline">
          <article className="milestone">
            <p className="eyebrow">SEPT 2025 — OCT 2025 / EXPERIENCE</p>
            <h3>Frontend Developer Intern</h3>
            <p className="organization">InLighnX Global Pvt Ltd</p>
            <p>
              Built responsive dashboard UI components and resolved rendering
              defects for backend REST API integrations.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="badge">Responsive UI</span>
              <span className="badge">REST API integration</span>
            </div>
          </article>
          <article className="milestone">
            <p className="eyebrow">2023 — 2027 / EDUCATION</p>
            <h3>
              B.E. Information Science
              <br />& Engineering
            </h3>
            <p className="organization">Don Bosco Institute of Technology</p>
            <p className="font-mono text-sm">
              CGPA <span className="code-green">7.66 / 10</span>
            </p>
          </article>
        </div>
        <div className="certifications">
          <div className="cert-heading">
            <h3>Credentials & milestones</h3>
            <span className="eyebrow">05</span>
          </div>
          {certifications.map((c, i) => (
            <details key={c.name} className="certificate">
              <summary>
                <span className="tier-number">0{i + 1}</span>
                <span>{c.name}</span>
                <Plus size={16} aria-hidden="true" />
              </summary>
              <div className="certificate-detail">
                {c.detail && <p>{c.detail}</p>}
                <ExternalLink
                  href={c.url}
                  className="text-action"
                  aria-label={`View Certificate: ${c.name}`}
                >
                  View Certificate <ArrowUpRight size={15} />
                </ExternalLink>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
