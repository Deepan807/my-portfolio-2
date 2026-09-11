"use client";

import { useState } from "react";
import { ArrowUpRight, Search, Code2, FileText, Link2 } from "lucide-react";
import { skills } from "@/lib/data";

const icons = [Code2, Search, FileText, Link2];

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="skills" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div className="max-w-lg">
            <p className="mb-3 text-sm text-ember">Skill set</p>
            <h2 className="font-display text-3xl font-800 leading-tight text-paper sm:text-5xl">
              Where strategy
              <br /> meets search.
            </h2>
          </div>
        </div>

        <div className="border-t border-line">
          {skills.map((skill, i) => {
            const Icon = icons[i % icons.length];
            const isOpen = openIndex === i;
            return (
              <div key={skill.number} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="focus-ring flex w-full items-center gap-6 py-7 text-left"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-line text-ember">
                    <Icon size={20} />
                  </span>
                  <span className="font-display text-2xl font-800 text-paper sm:text-4xl">
                    {skill.title}
                  </span>
                  <span
                    className={`ml-auto flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen ? "rotate-45 border-ember bg-ember text-ink" : "border-line text-paper"
                    }`}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div className="grid gap-6 pb-8 pl-0 sm:grid-cols-[1fr_1fr] sm:pl-[72px]">
                    <p className="max-w-sm text-mute">{skill.description}</p>
                    <ul className="space-y-2">
                      {skill.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-mute">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-ember" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
