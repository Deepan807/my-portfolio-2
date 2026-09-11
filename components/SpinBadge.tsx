import { Search } from "lucide-react";

export default function SpinBadge({ text = "SEO • ALWAYS LEARNING • " }: { text?: string }) {
  const id = "spin-badge-path";

  return (
    <div className="relative flex h-24 w-24 items-center justify-center">
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id={id} d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text fill="#F3F1EC" fontSize="8.3" letterSpacing="1.5">
          <textPath href={`#${id}`} startOffset="0%">
            {text.repeat(2)}
          </textPath>
        </text>
      </svg>
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ember text-ink">
        <Search size={18} />
      </div>
    </div>
  );
}
