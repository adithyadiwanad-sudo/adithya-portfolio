import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function StatusDot() {
  const ref = useRef(null);
  const visible = useInView(ref);
  const reduced = useReducedMotion();
  return (
    <motion.span
      ref={ref}
      aria-hidden="true"
      className="status-dot success-dot"
      animate={{ opacity: !reduced && visible ? [1, 0.3, 1] : 1 }}
      transition={
        !reduced && visible
          ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0 }
      }
    />
  );
}
