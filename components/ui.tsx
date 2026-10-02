import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[0.78rem] font-medium uppercase tracking-[0.16em] text-accent ${className}`}
    >
      {children}
    </p>
  );
}

type Parts = { before: string; emphasis: string; after?: string };

export function Rich({ parts }: { parts: Parts }) {
  return (
    <>
      {parts.before}
      <em className="italic">{parts.emphasis}</em>
      {parts.after}
    </>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light";
}) {
  const styles =
    variant === "primary"
      ? "bg-primary text-paper hover:bg-primary-dark"
      : "bg-paper text-primary hover:bg-blush";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[0.95rem] font-medium tracking-wide transition-colors ${styles}`}
    >
      {children}
    </a>
  );
}

export const h2Class =
  "text-[2rem] leading-[1.12] md:text-4xl lg:text-[2.6rem]";
export const bodyClass = "text-[1.0625rem] leading-[1.75] text-muted";
