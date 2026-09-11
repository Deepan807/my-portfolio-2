export default function Banner() {
  return (
    <section className="relative overflow-hidden border-t border-line py-28">
      <svg
        aria-hidden
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-90"
      >
        <defs>
          <radialGradient id="g1" cx="20%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#FF9A2E" />
            <stop offset="100%" stopColor="#0B0B0D" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="g2" cx="85%" cy="70%" r="55%">
            <stop offset="0%" stopColor="#E85A00" />
            <stop offset="100%" stopColor="#0B0B0D" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="g3" cx="55%" cy="15%" r="40%">
            <stop offset="0%" stopColor="#FF7A1A" />
            <stop offset="100%" stopColor="#0B0B0D" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1200" height="500" fill="#0B0B0D" />
        <rect width="1200" height="500" fill="url(#g1)" />
        <rect width="1200" height="500" fill="url(#g2)" />
        <rect width="1200" height="500" fill="url(#g3)" />
        {Array.from({ length: 7 }).map((_, i) => (
          <circle
            key={i}
            cx={120 + i * 160}
            cy={250 + (i % 2 === 0 ? -70 : 70)}
            r={3}
            fill="#F3F1EC"
            opacity={0.5}
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`l${i}`}
            x1={120 + i * 160}
            y1={250 + (i % 2 === 0 ? -70 : 70)}
            x2={120 + (i + 1) * 160}
            y2={250 + ((i + 1) % 2 === 0 ? -70 : 70)}
            stroke="#F3F1EC"
            strokeOpacity={0.15}
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-content px-6 text-center">
        <h2 className="font-display text-4xl font-800 tracking-tight text-paper sm:text-6xl">
          Search. Optimize. Grow.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-paper/80">
          Building practical SEO knowledge through hands-on audits, keyword research,
          technical analysis, and content optimization.
        </p>
      </div>
    </section>
  );
}
