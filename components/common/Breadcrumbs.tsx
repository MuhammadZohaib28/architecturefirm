import Link from "next/link";

type BreadcrumbsProps = {
  parent: { href: string; label: string };
  current: string;
};

export default function Breadcrumbs({ parent, current }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-ivory/75">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-ivory">
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-ivory/45">
          /
        </li>
        <li>
          <Link
            href={parent.href}
            className="transition-colors hover:text-ivory"
          >
            {parent.label}
          </Link>
        </li>
        <li aria-hidden="true" className="text-ivory/45">
          /
        </li>
        <li aria-current="page" className="text-ivory">
          {current}
        </li>
      </ol>
    </nav>
  );
}
