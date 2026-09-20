import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ResumeButton from "./ResumeButton";
const links = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Background", "#background"],
  ["Contact", "#contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef(null);
  useEffect(() => {
    // Use viewport height for the reading line, independent of screen width.
    const sections = [...document.querySelectorAll("main section[id]")];
    let frame = 0;
    function update() {
      frame = 0;
      const current = sections.filter(section => section.getBoundingClientRect().top <= window.innerHeight * 0.3).at(-1);
      setActive(current ? `#${current.id}` : "");
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  useEffect(() => {
    function escape(event) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="shell nav-shell">
        <a
          href="#home"
          aria-label="Adithya Diwanad — home"
          className="wordmark"
        >
          ad<span className="code-accent">/</span>
          <span className="wordmark-caption">ADITHYA DIWANAD</span>
        </a>
        <div className="desktop-nav">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              aria-current={active === href ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-contact">
          Let's talk <ArrowUpRight size={16} />
        </a>
        <button
          ref={toggle}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="icon-button mobile-toggle"
        >
          {open ? <X /> : <Menu />}
        </button>
        <div id="mobile-menu" hidden={!open} className="mobile-menu">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={active === href ? "location" : undefined}
              className="nav-link"
            >
              {label}
            </a>
          ))}
          <ResumeButton onClick={() => setOpen(false)} />
        </div>
      </nav>
    </header>
  );
}
