import { ArrowDownRight } from 'lucide-react';
import { profile, socials } from '../data';
import { ExternalLink, Icon } from './UI';
import ProfileAvatar from './ProfileAvatar';
import ResumeButton from './ResumeButton';

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="hero relative border-b border-white/10 py-16 sm:py-24">
      <div className="shell relative">
        <p className="eyebrow mb-7">Full-Stack Developer / SDE / AI & GenAI Engineer</p>
        <div className="flex flex-col-reverse items-start justify-between gap-10 lg:flex-row lg:items-center">
          <h1 id="hero-title" className="min-w-0 text-[clamp(2.65rem,7.5vw,6.5rem)] font-semibold leading-[1.03] tracking-[-0.055em]">
            ADITHYA<br />
            <span className="text-indigo-300">DIWANAD<span className="text-indigo-500">.</span></span>
          </h1>
          <ProfileAvatar />
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <p className="max-w-xl text-xl leading-relaxed text-slate-200">{profile.headline}</p>
          <p className="max-w-xl text-base leading-8 text-slate-400">{profile.bio}</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className="button-primary">View Projects<ArrowDownRight size={19} aria-hidden="true" /></a>
          <ResumeButton />
          <div className="flex gap-2 sm:ml-4">
            {socials.map(item => <ExternalLink key={item.name} href={item.url} className="icon-button" aria-label={item.name} title={item.name}><Icon name={item.icon} /></ExternalLink>)}
          </div>
        </div>
      </div>
    </section>
  );
}
