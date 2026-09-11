"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";
import SpinBadge from "@/components/SpinBadge";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 md:pt-40">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-content items-center gap-14 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-8"
      >
        <div>
          <motion.div variants={rise} className="mb-6 flex items-center gap-2 text-sm text-ember">
            <span className="text-lg">＋</span> Hello, I&rsquo;m
          </motion.div>

          <motion.h1
            variants={rise}
            className="font-display text-[2.75rem] font-800 leading-[1.05] tracking-tight text-paper sm:text-6xl"
          >
            {profile.name}
            <br />
            <span className="text-ember">{profile.role}</span>
          </motion.h1>

          <motion.p variants={rise} className="mt-6 max-w-md text-mute">
            {profile.subhead}
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="focus-ring group inline-flex items-center gap-3 rounded-full bg-ember py-1.5 pl-6 pr-1.5 text-sm font-medium text-ink"
            >
              View my work
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-ember transition-transform group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-full border border-line px-6 py-3 text-sm text-paper transition-colors hover:border-ember hover:text-ember"
            >
              Let&rsquo;s connect
            </a>
          </motion.div>
        </div>

        <motion.div variants={rise} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 angled-panel bg-gradient-to-br from-ember-bright to-ember-deep" />
          <div className="angled-panel relative aspect-[4/5] w-full overflow-hidden bg-surface">
            <Image
              src={profile.photo}
              alt={`${profile.name}, ${profile.role}`}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 380px, 90vw"
            />
          </div>

          <div className="absolute -right-6 -top-6 rounded-full bg-ink/80 backdrop-blur">
            <SpinBadge />
          </div>

          <div className="absolute -bottom-5 left-6 rounded-full border border-line bg-ink px-4 py-2 text-xs text-paper shadow-lg shadow-black/40">
            {profile.badge}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
