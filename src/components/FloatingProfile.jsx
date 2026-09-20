import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import EngineeringProfile from "./EngineeringProfile";

export default function FloatingProfile() {
  const ref = useRef(null);
  const visible = useInView(ref, { amount: 0.1 });
  const reduced = useReducedMotion();
  // A separate spring layer keeps scroll movement and ambient float independent.
  // Native scrolling stays under the visitor's control.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const targetY = useTransform(scrollYProgress, [0, 1], [8, -8]);
  const glideY = useSpring(targetY, { stiffness: 90, damping: 25, mass: 0.6 });
  return (
    <div ref={ref} className="profile-scroll-anchor">
      <motion.div
        style={{ y: reduced ? 0 : glideY }}
        className="profile-parallax"
      >
        <motion.div
          className="floating-profile"
          animate={{ y: !reduced && visible ? [0, -8, 0] : 0 }}
          transition={
            !reduced && visible
              ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
              : { duration: reduced ? 0 : 0.4 }
          }
        >
          <EngineeringProfile />
        </motion.div>
      </motion.div>
    </div>
  );
}
