import { Quote } from "lucide-react";
import { principles } from "@/lib/data";

export default function Principles() {
  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-14 max-w-lg">
          <p className="mb-3 text-sm text-ember">How I work</p>
          <h2 className="font-display text-3xl font-800 leading-tight text-paper sm:text-5xl">
            A few things I hold to.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p}
              className="rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-ember/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember/15 text-ember">
                <Quote size={18} fill="currentColor" />
              </span>
              <p className="mt-5 font-display text-xl font-700 leading-snug text-paper">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
