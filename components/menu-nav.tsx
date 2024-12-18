"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

const items = [
  {
    title: "Home",
    icon: "/images/icon-home.svg",
    path: "/",
  },
  {
    title: "Search",
    icon: "/images/icon-search.svg",
    onClick: () => alert("Search"),
  },
  {
    title: "Archived",
    icon: "/images/icon-archive.svg",
    path: "/archives",
  },
  {
    title: "Tags",
    icon: "/images/icon-tag.svg",
    onClick: () => alert("Tags"),
  },
  {
    title: "Settings",
    icon: "/images/icon-settings.svg",
    path: "/settings",
  },
];

export const MenuNav = () => {
  const pathname = usePathname();
  return (
    <nav className="grid grid-cols-5 border-t border-neutral-200 bg-neutral-0 px-4 py-3 shadow-top">
      {items.map((item) => {
        const isActive = pathname === item.path;
        return item.path ? (
          <Link
            key={item.title}
            href={item.path}
            className={cn(
              "text-preset-6 flex flex-col items-center p-1 hover:bg-accent md:mx-auto md:w-20",
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
          </Link>
        ) : (
          <Button
            key={item.title}
            className={cn(
              "text-preset-6 flex flex-col items-center p-1 md:mx-auto md:w-20",
              isActive && "bg-blue-50",
            )}
            variant="ghost"
            onClick={item.onClick}
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
          </Button>
        );
      })}
    </nav>
  );
};
