/**
 * LogoMark variants — change `variant` in Nav.tsx and Footer.tsx to switch.
 *
 * A — Geometric T       (bold SVG letterform, architectural)
 * B — Bracket mark      ([ T ] precision / engineering feel)
 * C — Slash prefix      (/ TURBOSE — forward motion, agency)
 * D — Corner node       (two-line corner + dot, minimal / techy)
 * E — Terminal cursor   ([■_] bracket + block cursor + underscore)
 */

type LogoVariant = "A" | "B" | "C" | "D" | "E";

interface LogoMarkProps {
  variant?: LogoVariant;
  /** "light" for dark backgrounds (default), "dark" for light backgrounds */
  theme?: "light" | "dark";
  showSubtitle?: boolean;
}

export default function LogoMark({ variant = "E", theme = "light", showSubtitle = false }: LogoMarkProps) {
  const wordmarkColor = theme === "light" ? "text-white" : "text-black";
  const subColor = theme === "light" ? "text-white/40" : "text-black/40";

  if (variant === "E") {
    // Terminal cursor mark — [■_] bracket with block cursor + underscore
    return (
      <span className="flex items-center gap-3">
        <svg width="40" height="28" viewBox="0 0 50 36" fill="none" aria-hidden>
          {/* Left bracket [ */}
          <path d="M3 1 L3 35" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="square"/>
          <path d="M3 1 L12 1" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="square"/>
          <path d="M3 35 L12 35" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="square"/>
          {/* Right bracket ] */}
          <path d="M47 1 L47 35" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="square"/>
          <path d="M38 1 L47 1" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="square"/>
          <path d="M38 35 L47 35" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="square"/>
          {/* Block cursor ■ */}
          <rect x="14" y="6" width="13" height="14" fill="#0D9488"/>
          {/* Underscore _ */}
          <rect x="27" y="27" width="11" height="3" fill="#0D9488"/>
        </svg>
        <span className="flex flex-col leading-none gap-1">
          <span className={`font-display font-semibold text-[17px] tracking-[0.12em] uppercase ${wordmarkColor}`}>
            Turbose
          </span>
          {showSubtitle && (
            <span className={`text-[10px] tracking-[0.2em] uppercase font-body ${subColor}`}>
              AI Labs
            </span>
          )}
        </span>
      </span>
    );
  }

  if (variant === "A") {
    return (
      <span className="flex items-center gap-3">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <rect x="1" y="1" width="16" height="4" fill="#0D9488" />
          <rect x="7" y="5" width="4" height="12" fill="#0D9488" />
        </svg>
        <span className={`font-display font-semibold text-[17px] tracking-[0.12em] uppercase ${wordmarkColor}`}>
          Turbose
        </span>
        <span className={`text-[11px] tracking-[0.18em] uppercase hidden sm:block font-body ${subColor}`}>
          AI Labs Enterprise
        </span>
      </span>
    );
  }

  if (variant === "B") {
    return (
      <span className="flex items-center gap-3">
        <span className="flex items-center font-display font-bold text-accent text-[18px] tracking-[-0.04em] leading-none select-none">
          <span className="opacity-60">[</span>
          <span className="text-[14px] tracking-[0.05em] px-[3px]">T</span>
          <span className="opacity-60">]</span>
        </span>
        <span className={`font-display font-semibold text-[17px] tracking-[0.12em] uppercase ${wordmarkColor}`}>
          Turbose
        </span>
        <span className={`text-[11px] tracking-[0.18em] uppercase hidden sm:block font-body ${subColor}`}>
          AI Labs Enterprise
        </span>
      </span>
    );
  }

  if (variant === "C") {
    return (
      <span className="flex items-center gap-2">
        <span className="font-display font-light text-accent text-[22px] leading-none select-none" style={{ transform: "scaleX(0.7)", display: "inline-block" }}>
          /
        </span>
        <span className={`font-display font-semibold text-[17px] tracking-[0.12em] uppercase ${wordmarkColor}`}>
          Turbose
        </span>
        <span className={`text-[11px] tracking-[0.18em] uppercase hidden sm:block font-body ${subColor}`}>
          AI Labs Enterprise
        </span>
      </span>
    );
  }

  // D — Corner node
  return (
    <span className="flex items-center gap-3">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M1 1 L1 15 L15 15" stroke="#0D9488" strokeWidth="2" strokeLinecap="square" fill="none"/>
        <rect x="9" y="2" width="5" height="5" fill="#0D9488" opacity="0.5"/>
      </svg>
      <span className={`font-display font-semibold text-[17px] tracking-[0.12em] uppercase ${wordmarkColor}`}>
        Turbose
      </span>
      <span className={`text-[11px] tracking-[0.18em] uppercase hidden sm:block font-body ${subColor}`}>
        AI Labs Enterprise
      </span>
    </span>
  );
}