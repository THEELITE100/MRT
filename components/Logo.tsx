import { site } from "@/lib/content";

export function Logo({ light = false }: { light?: boolean }) {
  const text = light ? "text-paper" : "text-primary";
  return (
    <a href="#top" className="flex items-center gap-3" aria-label={`${site.name}, home`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <path
          d="M8 34V18a12 12 0 0 1 24 0v16"
          fill="none"
          stroke={light ? "#edf1ef" : "#1f4b4a"}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M15 34V19a5 5 0 0 1 10 0v15"
          fill="none"
          stroke="#9a4630"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-tight">
        <span className={`block font-display text-[1.35rem] ${text}`}>
          {site.shortName}
        </span>
        <span
          className={`block text-[0.72rem] tracking-wide ${light ? "text-paper/70" : "text-muted"}`}
        >
          {site.title}
        </span>
      </span>
    </a>
  );
}
