import MotionCard from "./MotionCard";
import StatusDot from "./StatusDot";
import { useState } from "react";
import { Check, Copy, ArrowUpRight } from "lucide-react";
import { profile } from "../data";
import ProfileAvatar from "./ProfileAvatar";

export default function EngineeringProfile() {
  const [notice, setNotice] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setNotice("Email copied.");
    } catch {
      setNotice("Copy unavailable. Select the address to copy it.");
    }
  }
  return (
    <MotionCard
      as="aside"
      className="engineering-profile"
      aria-label="Engineering profile card"
    >
      <div className="profile-card-heading">
        <span className="eyebrow">ENGINEERING PROFILE</span>
        <span className="profile-id">AD / 01</span>
      </div>
      <ProfileAvatar />
      <p className="profile-availability">
        <StatusDot />
        Available for Full-Stack / SDE Roles
      </p>
      <div className="profile-card-copy">
        <h2>Adithya Diwanad</h2>
        <p>Full-Stack & AI Developer</p>
        <div className="profile-focus">
          <span>Backend systems</span>
          <span>AI integration</span>
          <span>Java & DSA</span>
        </div>
      </div>
      <div className="profile-card-contact">
        <a href={`mailto:${profile.email}`}>
          {profile.email}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <button
          className="copy-button"
          type="button"
          onClick={copyEmail}
          aria-label="Copy email address"
        >
          {notice === "Email copied." ? (
            <Check size={16} />
          ) : (
            <Copy size={16} />
          )}
          Copy
        </button>
        <p role="status" className="copy-status">
          {notice}
        </p>
      </div>
    </MotionCard>
  );
}
