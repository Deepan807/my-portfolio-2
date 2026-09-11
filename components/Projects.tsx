"use client";

import { useState } from "react";
import { ArrowUpRight, X, ShoppingBag, FileText, Building2 } from "lucide-react";
import { projects } from "@/lib/data";

const priorityColor: Record<string, string> = {
  high: "bg-red-500",
  medium: "bg-amber-500",
  low: "bg-emerald-500",
};

const thumbIcons = [ShoppingBag, FileText, Building2];
const thumbGradients = [
  "from-ember-bright to-ember-deep",
  "from-orange-400 via-ember to-ember-deep",
  "from-amber-400 to-ember-deep",
];

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="work" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-lg">
            <p className="mb-3 text-sm text-ember">Featured work</p>
            <h2 className="font-display text-3xl font-800 leading-tight text-paper sm:text-5xl">
              My successful audits.
            </h2>
            <p className="mt-4 text-mute">
              As part of my practical SEO learning and project work, I audited three different
              kinds of websites to see how requirements shift with business model and search intent.
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = thumbIcons[i % thumbIcons.length];
            return (
              <button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className="focus-ring group flex flex-col text-left"
              >
                <div
                  className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${thumbGradients[i % thumbGradients.length]} transition-transform duration-300 group-hover:scale-[1.02]`}
                >
                  <Icon
                    size={72}
                    strokeWidth={1}
                    className="absolute -bottom-4 -right-4 text-ink/20"
                  />
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-paper backdrop-blur transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <p className="mt-4 text-xs text-mute">{project.category}</p>
                <h3 className="mt-1 font-display text-lg font-700 text-paper">{project.title}</h3>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {projects.map((p) => (
            <span key={p.id} className="h-1.5 w-1.5 rounded-full bg-line" />
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setActiveId(null)}
        >
          <div
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line bg-surface p-8 sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-mute">{active.category}</p>
                <h3 className="mt-2 font-display text-2xl font-800 text-paper">{active.title}</h3>
              </div>
              <button
                aria-label="Close case study"
                onClick={() => setActiveId(null)}
                className="focus-ring rounded text-mute hover:text-paper"
              >
                <X size={22} />
              </button>
            </div>

            <div className="space-y-8 text-sm">
              <div>
                <h4 className="mb-2 text-xs uppercase tracking-wide text-ember">Objective</h4>
                <p className="text-mute">{active.objective}</p>
              </div>

              <div>
                <h4 className="mb-3 text-xs uppercase tracking-wide text-ember">Audit process</h4>
                <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {active.process.map((step, i) => (
                    <li key={step} className="rounded-lg border border-line px-3 py-2 text-xs text-paper">
                      {i + 1}. {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="mb-3 text-xs uppercase tracking-wide text-ember">Key findings</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {active.findings.map((f) => (
                    <div key={f.label} className="rounded-lg border border-line p-3">
                      <p className="text-xs font-medium text-paper">{f.label}</p>
                      <p className="mt-1 text-xs text-mute">{f.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-xs uppercase tracking-wide text-ember">Recommendations</h4>
                <ul className="space-y-2">
                  {active.recommendations.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-mute">
                      <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${priorityColor[r.priority]}`} />
                      {r.text}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="border-t border-line pt-4 text-xs text-mute">{active.status}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
