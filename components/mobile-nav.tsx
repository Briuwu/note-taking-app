"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    name: "Home",
    href: "/",
    icon: "/images/icon-home.svg",
  },
  {
    name: "Search",
    href: "/?search=true",
    icon: "/images/icon-search.svg",
  },
  {
    name: "Archived",
    href: "/archives",
    icon: "/images/icon-archive.svg",
  },
  {
    name: "Tags",
    href: "/?tags=true",
    icon: "/images/icon-tag.svg",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: "/images/icon-settings.svg",
  },
];

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full border-t border-neutral-200 bg-neutral-0 px-4 py-3 shadow-top lg:hidden">
      <ul className="grid grid-cols-5">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "flex justify-center py-1 md:flex-col md:items-center",
                  active && "bg-blue-50",
                )}
              >
                <Image src={item.icon} alt="" width={24} height={24} />
                <span className="text-preset-6 hidden text-neutral-500 md:block">
                  {item.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
