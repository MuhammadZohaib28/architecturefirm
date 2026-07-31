import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Tone of the wordmark — dark on light backgrounds, light on dark. */
  tone?: "dark" | "light" | "mono-dark";
  className?: string;
};

/**
 * Lissom Architects wordmark — "Lissom" in serif italic above a bold
 * "Architects." sans, matching the brand identity sheet.
 */
export default function Logo({ tone = "dark", className }: LogoProps) {
  const lissom = tone === "light" ? "text-ivory" : "text-charcoal";
  const architects =
    tone === "light"
      ? "text-ivory"
      : tone === "mono-dark"
        ? "text-charcoal"
        : "text-bronze";
  return (
    <Link
      href="/"
      aria-label="Lissom Architects home"
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-serif text-2xl font-extralight italic leading-[0.85]",
          lissom,
        )}
      >
        Lissom
      </span>
      <span
        className={cn(
          "-mt-0.5 text-lg font-extrabold",
          architects,
        )}
      >
        Architects.
      </span>
    </Link>
  );
}
