import MagneticLink from "./MagneticLink";
import { Download } from "lucide-react";
import { profile } from "../data";

export default function ResumeButton({ className = "", onClick }) {
  return (
    <MagneticLink
      href={profile.resumeUrl}
      download={profile.resumeFilename}
      onClick={onClick}
      className={`button-secondary ${className}`}
    >
      Download Resume <Download size={18} aria-hidden="true" />
    </MagneticLink>
  );
}
