import { ArrowRight, Linkedin, Mail, Github } from "lucide-react";
import { nav, profile } from "@/lib/data";
import SpinBadge from "@/components/SpinBadge";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-28">
      <div className="pointer-events-none absolute inset-0 gradient-banner opacity-60" />

      <div className="relative mx-auto max-w-content px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-6 hidden sm:block">
              <SpinBadge text="LET'S TALK • GET IN TOUCH • " />
            </div>
            <h2 className="font-display text-4xl font-800 leading-tight text-paper sm:text-6xl">
              Let&rsquo;s build something
              <br /> that gets found.
            </h2>
            <p className="mt-5 max-w-sm text-mute">
              Interested in working with a motivated Digital Marketing professional focused on
              SEO and organic growth?
            </p>
          </div>

          <form className="w-full max-w-sm space-y-3 rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur">
            <input
              type="text"
              placeholder="Name"
              className="focus-ring w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-mute"
            />
            <input
              type="email"
              placeholder="Email"
              className="focus-ring w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-mute"
            />
            <input
              type="text"
              placeholder="Subject"
              className="focus-ring w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-mute"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="focus-ring w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-mute"
            />
            <button
              type="submit"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Send message
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const hasSocial = profile.links.linkedin || profile.links.email || profile.links.github;

  return (
    <footer className="gradient-footer border-t border-line">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2 font-display text-xl font-800 text-paper">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ember text-ink">D</span>
              {profile.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-paper/70">{profile.role}</p>
            {hasSocial && (
              <div className="mt-6 flex gap-3">
                {profile.links.linkedin && (
                  <a
                    href={profile.links.linkedin}
                    aria-label="LinkedIn"
                    className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/80 hover:border-ember hover:text-ember"
                  >
                    <Linkedin size={15} />
                  </a>
                )}
                {profile.links.email && (
                  <a
                    href={`mailto:${profile.links.email}`}
                    aria-label="Email"
                    className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/80 hover:border-ember hover:text-ember"
                  >
                    <Mail size={15} />
                  </a>
                )}
                {profile.links.github && (
                  <a
                    href={profile.links.github}
                    aria-label="GitHub"
                    className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/80 hover:border-ember hover:text-ember"
                  >
                    <Github size={15} />
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-wide text-paper/50">Navigate</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-paper/80 hover:text-ember">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-wide text-paper/50">Contact</p>
            <ul className="space-y-3 text-sm text-paper/80">
              {profile.links.email ? (
                <li>
                  <a href={`mailto:${profile.links.email}`} className="hover:text-ember">
                    {profile.links.email}
                  </a>
                </li>
              ) : (
                <li className="text-paper/50">Add your email here</li>
              )}
              <li className="text-paper/50">Add your city here</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with curiosity. Optimized with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
