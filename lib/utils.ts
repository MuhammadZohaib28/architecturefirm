/**
 * Tiny className combiner — keeps conditional class logic readable
 * without pulling in an extra dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Pad a 1-based index into an editorial number label, e.g. 1 -> "01". */
export function pad(n: number): string {
  return String(n).padStart(2, "0");
}
