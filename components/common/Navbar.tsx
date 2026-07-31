"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Detail pages (e.g. /projects/[slug], /services/[slug]) open with a
  // full-bleed image directly under the navbar, so a transparent header
  // would be unreadable. Force the solid/blurred treatment there.
  const hasImageHero = /^\/(projects|services)\/[^/]+$/.test(pathname);
  const solid = scrolled || hasImageHero;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-stone bg-ivory/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
          <Logo />

          <ul className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group relative text-sm tracking-wide transition-colors",
                    isActive(link.href)
                      ? "text-charcoal"
                      : "text-muted hover:text-charcoal",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-[#FFBD59] transition-all duration-300",
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden rounded-full bg-bronze px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-ivory lg:inline-block"
            >
              Book Consultation
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <motion.span
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="block h-px w-6 bg-charcoal"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="block h-px w-6 bg-charcoal"
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-lenis-prevent
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ivory px-6 pt-28 pb-10 lg:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-stone"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-5 text-3xl tracking-tight",
                      isActive(link.href) ? "text-charcoal" : "text-charcoal/60",
                    )}
                  >
                    {link.label}
                    <span className="overline">{String(i + 1).padStart(2, "0")}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex items-center justify-center rounded-full bg-bronze px-6 py-4 text-base font-semibold text-charcoal"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
