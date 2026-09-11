import { tools } from "@/lib/data";

export default function ToolsStrip() {
  return (
    <section className="border-y border-line bg-surface/40 py-14">
      <div className="mx-auto max-w-content px-6">
        <p className="mb-8 text-sm text-mute">Tools I work with</p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-5">
          {tools.map((tool) => (
            <div key={tool.name}>
              <p className="font-display text-lg font-700 text-paper transition-colors hover:text-ember">
                {tool.name}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-mute">{tool.use}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
