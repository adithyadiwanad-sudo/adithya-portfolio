import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile, socials } from "../data";
import { ExternalLink, Icon } from "./UI";
export default function Contact() {
  const [notice, setNotice] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setNotice(
      "Your email app was requested. Review and send the draft there. If it did not open, email me directly using the address above.",
    );
  }
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="shell section-space grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">04 / Get in touch</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Let’s build
              <br />
              <span className="text-sky-600">something useful.</span>
            </h2>
            <p className="mt-6 max-w-sm leading-7 text-slate-500">
              Have a role, a project, or an idea to discuss? Let’s connect.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-7 inline-flex min-h-11 max-w-full items-center gap-2 break-all text-base text-sky-700 hover:text-sky-800"
            >
              {profile.email}
              <ArrowUpRight size={18} className="shrink-0" aria-hidden="true" />
            </a>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field-label">
                Name
                <input
                  className="field"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  maxLength={100}
                />
              </label>
              <label className="field-label">
                Email
                <input
                  className="field"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  maxLength={200}
                />
              </label>
            </div>
            <label className="field-label">
              Message
              <textarea
                className="field min-h-36 resize-y"
                name="message"
                placeholder="Tell me what you have in mind…"
                rows={4}
                required
                maxLength={2000}
              />
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className="button-primary">
                Open Email Draft
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
              <p className="text-sm text-slate-500">Opens your email app.</p>
            </div>
            <p role="status" className="text-sm leading-6 text-sky-700">
              {notice}
            </p>
          </form>
        </div>
      </section>
      <footer className="shell flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Adithya Diwanad
        </p>
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <ExternalLink
              key={s.name}
              href={s.url}
              aria-label={s.name}
              className="icon-button"
            >
              <Icon name={s.icon} />
            </ExternalLink>
          ))}
        </div>
        <a href="#home" className="nav-link">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
