import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Use the white wordmark on darker backgrounds. */
  tone?: "dark" | "light" | "mono-dark";
  className?: string;
};

export default function Logo({ tone = "dark", className }: LogoProps) {
  const isLight = tone === "light";

  return (
    <Link
      href="/"
      aria-label="Studio Lissom LTD home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src={
          isLight
            ? "/images/studio-lissom-logo-white.png"
            : "/images/studio-lissom-logo.png"
        }
        alt="Studio Lissom LTD"
        width={280}
        height={137}
        priority
        className="h-14 w-auto object-contain"
      />
    </Link>
  );
}
