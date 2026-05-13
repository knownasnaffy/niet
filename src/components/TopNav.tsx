"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Academics", href: "/programs-courses" },
  { name: "Admissions", href: "/admissions-overview" },
  { name: "Research", href: "/course-resources" },
  { name: "Placements", href: "/placement-overview" },
  { name: "Campus Life", href: "/events-page" },
  { name: "About Us", href: "/about-niet" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="bg-canvas sticky top-0 z-50 border-b border-fog">
      <div className="h-16 flex justify-between items-center w-full px-lg max-w-max-width mx-auto">
        <div className="flex items-center gap-xl">
          <Link
            href="/"
            className="text-display-sm font-extrabold text-ink tracking-tight"
          >
            NIET
          </Link>
          <nav className="hidden md:flex items-center gap-lg">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

              // If we are at the root, default to highlighting Academics (since it was previously the default)
              const isHighlighted = isActive || (pathname === "/" && link.name === "Academics");

              return (
                <Link
                  key={link.name}
                  className={
                    isHighlighted
                      ? "font-body-emphasis text-body-emphasis text-primary border-b-2 border-primary py-1"
                      : "font-body-emphasis text-body-emphasis text-ink opacity-80 hover:text-primary transition-colors duration-200"
                  }
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-md">
          <div className="hidden lg:flex items-center bg-cloud border border-fog px-md py-xxs rounded-lg">
            <span className="material-symbols-outlined text-graphite text-[20px]">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 text-caption-md py-1"
              placeholder="Search NIET..."
              type="text"
            />
          </div>
          <Link
            href="/apply-online"
            className="bg-primary text-on-ink px-xl py-2 font-button-md rounded-[4px] scale-100 active:scale-95 transition-transform inline-block"
          >
            Apply Now
          </Link>
          <span className="material-symbols-outlined text-ink cursor-pointer">
            language
          </span>
        </div>
      </div>
    </header>
  );
}
