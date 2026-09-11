"use client";

import { useEffect, useState } from "react";
import { Menu, X, Linkedin, Mail, Github } from "lucide-react";
import { nav, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socialIcons = [
    profile.links.linkedin && { href: profile.links.linkedin, Icon: Linkedin, label: "LinkedIn" },
    profile.links.email && { href: `mailto:${profile.links.email}`, Icon: Mail, label: "Email" },
    profile.links.github && { href: profile.links.github, Icon: Github, label: "GitHub" },
  ].filter(Boolean) as { href: string; Icon: typeof Linkedin; label: string }[];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-800 tracking-tight text-paper">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ember text-ink">D</span>
          {profile.name}
        </a>

        <ul className="hidden gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="focus-ring rounded text-sm text-mute transition-colors hover:text-paper"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          {socialIcons.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line text-mute transition-colors hover:border-ember hover:text-ember"
            >
              <Icon size={15} />
            </a>
          ))}
          <a
            href="#contact"
            className="focus-ring rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-ink"
          >
            Let&rsquo;s talk
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="focus-ring rounded text-paper md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-ink"
              >
                Let&rsquo;s talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
