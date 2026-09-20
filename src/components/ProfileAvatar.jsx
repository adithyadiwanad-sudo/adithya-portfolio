import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { profile } from "../data";

export default function ProfileAvatar() {
  const reduced = useReducedMotion();
  const [failed, setFailed] = useState(false);
  return (
    <motion.div
      className="profile-avatar"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <motion.span
        aria-hidden="true"
        className="portrait-hover-glow"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: reduced ? 0 : 0.3 }}
      />
      <div className="portrait-clip">
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
          <motion.img
            src={profile.imageUrl}
            alt="Adithya Diwanad"
            width="800"
            height="800"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            onError={() => setFailed(true)}
            variants={{
              rest: { scale: 1 },
              hover: { scale: reduced ? 1 : 1.05 },
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
        )}
      </div>
    </motion.div>
  );
}
