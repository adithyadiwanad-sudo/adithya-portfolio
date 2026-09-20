import {
  ArrowUpRight,
  AudioLines,
  ChartNoAxesCombined,
  Code2,
  Github,
  Layers,
  Linkedin,
  Mail,
} from "lucide-react";
const icons = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
  mail: Mail,
  layers: Layers,
  audio: AudioLines,
  chart: ChartNoAxesCombined,
};
export function Icon({ name, ...props }) {
  const Component = icons[name] || Code2;
  return (
    <Component aria-hidden="true" size={20} strokeWidth={1.6} {...props} />
  );
}
export function ExternalLink({ href, children, className = "", ...props }) {
  return (
    <a
      href={href}
      target={href?.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
export function Badge({ children }) {
  return <span className="badge">{children}</span>;
}
export function SectionHeading({ number, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          {number} / {children}
        </p>
        <h2>{title}</h2>
      </div>
      <span className="section-heading-line" aria-hidden="true" />
    </div>
  );
}
export function ProjectLink({ href, label }) {
  return href ? (
    <ExternalLink href={href} className="text-action">
      {label}
      <ArrowUpRight size={16} aria-hidden="true" />
    </ExternalLink>
  ) : (
    <span className="unavailable">{label} / Not published</span>
  );
}
