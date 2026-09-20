import { useRef } from "react";

// Pointer movement is subtle, mouse-only, and respects reduced-motion settings.
export default function MagneticLink({ children, className = "", ...props }) {
  const ref = useRef(null);
  function reset() {
    ref.current?.style.removeProperty("transform");
  }
  function move(event) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(
      -4,
      Math.min(4, (event.clientX - bounds.left - bounds.width / 2) * 0.07),
    );
    const y = Math.max(
      -3,
      Math.min(3, (event.clientY - bounds.top - bounds.height / 2) * 0.1),
    );
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  }
  return (
    <a
      ref={ref}
      className={className}
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerDown={reset}
      onBlur={reset}
      {...props}
    >
      {children}
    </a>
  );
}
