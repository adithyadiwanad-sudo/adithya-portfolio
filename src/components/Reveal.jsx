import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
const elements = {
  div: motion.div,
  article: motion.article,
  section: motion.section,
};
export const revealViewport = { once: true, amount: 0.15 };
const ease = [0.22, 1, 0.36, 1];

// Named states isolate viewport reveals from nested hover variants. Hero load
// animations use animate; scroll reveals exclusively use whileInView.
export default function Reveal({
  as = "div",
  children,
  delay = 0,
  onLoad = false,
  pop = false,
  direction = "up",
  className,
  ...props
}) {
  const reduced = useReducedMotion();
  const [focused, setFocused] = useState(false);
  const Component = elements[as];
  const immediate = reduced || focused;
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "down" ? -18 : 50,
      scale: pop ? 0.96 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: immediate ? 0 : 0.6,
        delay: immediate ? 0 : delay,
        ease,
      },
    },
  };
  return (
    <Component
      inherit={false}
      className={className}
      variants={variants}
      initial={immediate ? false : "hidden"}
      {...(onLoad || immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: revealViewport })}
      onFocusCapture={() => setFocused(true)}
      {...props}
    >
      {children}
    </Component>
  );
}

// The observer is attached to an untransformed grid. Only its children move,
// avoiding a moving intersection target and one observer per skill chip.
export function RevealGroup({ children, className, stagger = 0.1 }) {
  const reduced = useReducedMotion();
  const [focused, setFocused] = useState(false);
  const immediate = reduced || focused;
  return (
    <motion.div
      className={className}
      data-reveal-group
      inherit={false}
      initial={immediate ? false : "hidden"}
      animate={immediate ? "visible" : undefined}
      whileInView="visible"
      viewport={revealViewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: immediate ? 0 : stagger } },
      }}
      onFocusCapture={() => setFocused(true)}
    >
      {children}
    </motion.div>
  );
}
export function RevealItem({ children, className }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      data-reveal-item
      variants={{
        hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduced ? 0 : 0.5, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
