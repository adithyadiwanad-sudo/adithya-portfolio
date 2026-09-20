import { useState } from "react";
import { profile } from "../data";
export default function ProfileAvatar() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="profile-avatar">
      {failed ? (
        <a
          href={profile.imageSourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Adithya Diwanad's profile photo"
        >
          <span aria-hidden="true">AD</span>
          <small>View photo ↗</small>
        </a>
      ) : (
        <img
          src={profile.imageUrl}
          alt="Adithya Diwanad"
          width="800"
          height="800"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
