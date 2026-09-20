import { motion, useReducedMotion } from "framer-motion";

const tags = {
  article: motion.article,
  aside: motion.aside,
  span: motion.span,
};
// The shadow stays rasterized; its opacity animates independently of elevation.
export default function MotionCard({
  as = "article",
  className = "",
  compact = false,
  children,
  ...props
}) {
  const reduced = useReducedMotion();
  const Component = tags[as];
  return (
    <Component
      className={`motion-card ${className}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{
        rest: { y: 0, scale: 1 },
        hover: {
          y: reduced ? 0 : compact ? -3 : -8,
          scale: reduced || !compact ? 1 : 1.03,
        },
      }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      {...props}
    >
      <motion.span
        aria-hidden="true"
        className="card-hover-glow"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: reduced ? 0 : 0.3 }}
      />
      {children}
    </Component>
  );
}
