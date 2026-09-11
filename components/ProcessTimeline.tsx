import { process } from "@/lib/data";

export default function ProcessTimeline() {
  return (
    <section id="process" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-12 max-w-lg">
          <p className="mb-3 text-sm text-ember">My process</p>
          <h2 className="font-display text-3xl font-800 leading-tight text-paper sm:text-5xl">
            Inside an SEO audit.
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {process.map((item, i) => (
            <div
              key={item.step}
              className="grid grid-cols-[2.5rem_1fr] items-center gap-4 py-6 sm:grid-cols-[2.5rem_10rem_1fr]"
            >
              <span className="font-display text-sm text-ember">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-700 text-paper">{item.step}</h3>
              <p className="text-sm text-mute sm:text-right">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
