import Link from "next/link";
import { Icon } from "./icons";

export function Btn({ variant = "primary", children, onClick, href, className = "", ...rest }: any) {
  const baseClasses = "inline-flex items-center gap-2.5 px-5 py-3.5 rounded-sm border border-transparent text-xs tracking-[0.14em] uppercase font-medium transition-all duration-220 cursor-pointer font-sans";
  
  const styles: Record<string, string> = {
    primary: "bg-[var(--accent)] text-[var(--accent-ink)] border-[var(--accent)] hover:opacity-90",
    outline: "bg-transparent text-[var(--ink)] border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)]",
    ghost:   "bg-transparent text-[var(--ink)] border-transparent !px-0 !py-3 hover:opacity-70",
    soft:    "bg-[var(--bg-2)] text-[var(--ink)] border-[var(--line)] hover:bg-[var(--bg)]"
  };

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${styles[variant]} ${className}`} {...rest} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${styles[variant]} ${className}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export function Section({ id, label, children, className = "", ...rest }: any) {
  return (
    <section id={id} data-screen-label={label} className={`py-[120px] ${className}`} {...rest}>
      <div className="max-w-[1280px] mx-auto px-10">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow flex items-center gap-2.5">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
      {children}
    </div>
  );
}

export function Display({ children, size = 88, className = "" }: any) {
  return (
    <h1 
      style={{ fontSize: size }} 
      className={`leading-[0.98] tracking-[-0.025em] font-light font-heading text-[var(--ink)] ${className}`}
    >
      {children}
    </h1>
  );
}

export function Stars({ n = 5, size = 13 }: { n?: number, size?: number }) {
  return (
    <span className="inline-flex gap-0.5 text-[var(--accent)]">
      {Array.from({ length: n }).map((_, i) => (
        <Icon key={i} name="star" size={size} />
      ))}
    </span>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return <div className={`h-[1px] bg-[var(--line)] ${className}`} />;
}
