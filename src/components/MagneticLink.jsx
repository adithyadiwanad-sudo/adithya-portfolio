import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

// Motion values avoid React renders on pointer movement and share one transform.
export default function MagneticLink({ children, className = "", ...props }) {
  const reduced = useReducedMotion();
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, { stiffness: 350, damping: 25 });
  const y = useSpring(targetY, { stiffness: 350, damping: 25 });
  function reset() {
    targetX.set(0);
    targetY.set(0);
  }
  function move(event) {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    targetX.set(
      Math.max(
        -4,
        Math.min(4, (event.clientX - bounds.left - bounds.width / 2) * 0.07),
      ),
    );
    targetY.set(
      Math.max(
        -3,
        Math.min(3, (event.clientY - bounds.top - bounds.height / 2) * 0.1),
      ),
    );
  }
  return (
    <motion.a
      className={`motion-cta ${className}`}
      style={{ x: reduced ? 0 : x, y: reduced ? 0 : y }}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerDown={reset}
      onBlur={reset}
      {...props}
    >
      {children}
    </motion.a>
  );
}
