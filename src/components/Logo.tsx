// 리턴루프 로고 — 순환(loop) 모티프. spin이면 천천히 회전.
export default function Logo({ size = 28, spin = false }: { size?: number; spin?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        className={spin ? "loop-rotate" : ""}
        aria-hidden
      >
        <defs>
          <linearGradient id="rl-g" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#2dd4a7" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        {/* 순환 화살표 루프 */}
        <path
          d="M38 16a16 16 0 1 0 3.2 11"
          stroke="url(#rl-g)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M40 8v9h-9" stroke="url(#rl-g)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="24" cy="24" r="4.5" fill="url(#rl-g)" />
      </svg>
      <b className="text-[17px] font-bold tracking-tight">
        Return<span className="grad">Loop</span>
      </b>
    </span>
  );
}
