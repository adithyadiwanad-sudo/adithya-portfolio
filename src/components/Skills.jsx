import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { Code2, Monitor, Database, Wrench } from "lucide-react";
import { skills } from "../data";
import { SectionHeading } from "./UI";
import SkillChip from "./SkillChip";
// Present the existing content as four architectural tiers.
const tiers = [
  {
    name: "Languages & Core",
    icon: Code2,
    items: [...skills[0].items, ...skills[1].items],
  },
  { name: "Frontend", icon: Monitor, items: skills[2].items },
  { name: "Backend & Databases", icon: Database, items: skills[3].items },
  {
    name: "Developer Tools & AI Integration",
    icon: Wrench,
    items: [...skills[4].items, "Whisper", "Scikit-learn", "GenAI workflows"],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="section-band">
      <div className="shell section-space">
        <SectionHeading number="02" title="The engineering toolkit">
          From interface to infrastructure
        </SectionHeading>
        <div className="skill-tiers">
          {tiers.map(({ name, icon: TierIcon, items }, i) => (
            <article className="skill-tier" key={name}>
              <Reveal className="tier-title">
                <span className="tier-number">0{i + 1}</span>
                <TierIcon size={20} aria-hidden="true" />
                <h3>{name}</h3>
              </Reveal>
              <RevealGroup className="flex flex-wrap gap-2" stagger={0.05}>
                {items.map((item) => (
                  <RevealItem key={item} className="skill-reveal">
                    <SkillChip name={item} />
                  </RevealItem>
                ))}
              </RevealGroup>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
