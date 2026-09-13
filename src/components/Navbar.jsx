import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ResumeButton from './ResumeButton';
const links = [['Projects', '#projects'], ['Skills', '#skills'], ['Background', '#background'], ['Contact', '#contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1020]/90 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="shell flex min-h-20 flex-wrap items-center justify-between gap-x-4">
        <a href="#home" aria-label="Adithya Diwanad — home" className="text-xl font-bold tracking-tight">ad<span className="text-indigo-400">.</span></a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
        </div>
        <div className="hidden lg:block"><ResumeButton /></div>
        <button type="button" aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}
          onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }} className="icon-button lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
        <div id="mobile-menu" hidden={!open} onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}
          className="w-full border-t border-white/10 pb-4 pt-2 lg:hidden">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="nav-link block py-3">{label}</a>)}
          <ResumeButton onClick={() => setOpen(false)} className="mt-2" />
        </div>
      </nav>
    </header>
  );
}
