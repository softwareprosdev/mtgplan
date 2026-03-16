import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: `https://mtgplan.com${item.href}`,
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="text-sm text-neutral-700">
        <ol className="flex items-center gap-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="text-neutral-900 font-medium">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary-light transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
