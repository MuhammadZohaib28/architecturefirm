import Link from "next/link";
import { services } from "@/data/services";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Pinterest" },
  { href: "#", label: "Behance" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-ivory">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.08]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-14 border-b border-ivory/10 py-20 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="inline-block h-2.5 w-2.5 rotate-45 border border-ivory" />
              <span className="text-xl font-bold tracking-tight">
                Kensington <span className="text-bronze-soft">Design House</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed text-ivory/55">
              A luxury architecture and interior design studio crafting timeless
              spaces with precision, purpose, and elegance.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-xs text-ivory/70 transition-colors hover:border-bronze-soft hover:text-ivory"
                  aria-label={s.label}
                >
                  {s.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="overline mb-6 text-ivory/40">Navigate</h4>
            <ul className="space-y-3.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-ivory/65 transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="overline mb-6 text-ivory/40">Services</h4>
            <ul className="space-y-3.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-ivory/65 transition-colors hover:text-ivory"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="overline mb-6 text-ivory/40">Studio</h4>
            <address className="space-y-3.5 not-italic text-ivory/65">
              <p>14 Albion Mews<br />London, W2 2EG</p>
              <p>
                <a href="mailto:hello@kensingtondesignhouse.com" className="hover:text-ivory">
                  hello@kensingtondesignhouse.com
                </a>
              </p>
              <p>
                <a href="tel:+442071234567" className="hover:text-ivory">
                  +44 20 7123 4567
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-ivory/45 md:flex-row">
          <p>© {new Date().getFullYear()} Kensington Design House. All rights reserved.</p>
          <p className="flex gap-6">
            <a href="#" className="hover:text-ivory/80">Privacy</a>
            <a href="#" className="hover:text-ivory/80">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
