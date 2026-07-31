import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import Logo from "./Logo";
import { services } from "@/data/services";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    href: "https://www.instagram.com/lissom_architects/",
    label: "Lissom Architects",
    Icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#FFBD59] text-black">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.12]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-14 border-b border-white py-20 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm leading-relaxed text-black/75">
              A multidisciplinary architecture practice across the UK and UAE,
              uniting architecture, interiors, and branding into a single,
              cohesive vision.
            </p>
            <div className="mt-8 flex">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="inline-flex items-center gap-3 rounded-full border border-white px-3 py-2 text-sm font-semibold text-black transition-colors hover:bg-white/25"
                  aria-label={`Open ${s.label} on Instagram`}
                  title={`Open ${s.label} on Instagram`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_12%,#fd5949_38%,#d6249f_62%,#285AEB_100%)] text-xl text-white shadow-sm">
                    <s.Icon aria-hidden="true" />
                  </span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="mb-6 text-xs font-extrabold tracking-[0.32em] text-white uppercase">
              Navigate
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-black/75 transition-colors hover:text-black"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-6 text-xs font-extrabold tracking-[0.32em] text-white uppercase">
              Services
            </h4>
            <ul className="space-y-3.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-black/75 transition-colors hover:text-black"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-6 text-xs font-extrabold tracking-[0.32em] text-white uppercase">
              Studios
            </h4>
            <address className="space-y-3.5 not-italic text-black/75">
              <p>London, United Kingdom</p>
              <p>Dubai, United Arab Emirates</p>
              <p>
                <a href="mailto:hello@lissom.co.uk" className="hover:text-black">
                  hello@lissom.co.uk
                </a>
              </p>
              <p>
                <a href="tel:+442071234567" className="hover:text-black">
                  +44 20 7123 4567
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-white md:flex-row">
          <p>&copy; {new Date().getFullYear()} Lissom Architects PLC. All rights reserved.</p>
          <p className="flex gap-6">
            <a href="#" className="text-white transition-colors hover:text-black/65">
              Privacy
            </a>
            <a href="#" className="text-white transition-colors hover:text-black/65">
              Terms
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
