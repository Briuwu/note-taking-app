"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Home",
    icon: "/images/icon-home.svg",
    path: "/",
    isLink: true,
  },
  {
    title: "Search",
    icon: "/images/icon-search.svg",
    path: () => alert("search"),
    isLink: false,
  },
  {
    title: "Archived",
    icon: "/images/icon-archive.svg",
    path: "/archives",
    isLink: true,
  },
  {
    title: "Tags",
    icon: "/images/icon-tag.svg",
    path: () => alert("tags"),
    isLink: false,
  },
  {
    title: "Settings",
    icon: "/images/icon-settings.svg",
    path: () => alert("settings"),
    isLink: false,
  },
];

export const MenuNav = () => {
  const pathname = usePathname();
  return (
    <nav className="shadow-top grid grid-cols-5 border-t border-neutral-200 bg-neutral-0 px-4 py-3">
      {items.map((item) => {
        const isActive = pathname === item.path;
        return (
          <div
            key={item.title}
            className={cn(
              "text-preset-6 flex flex-col items-center p-1 md:mx-auto md:w-20",
              isActive && "bg-blue-50",
            )}
          >
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={24}
              height={24}
              className="mx-auto"
            />
            <span
              className={cn("hidden md:block", isActive && "text-blue-500")}
            >
              {item.title}
            </span>
          </div>
        );
      })}
    </nav>
  );
};
