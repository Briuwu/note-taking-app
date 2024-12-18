"use client";
import { usePathname } from "next/navigation";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const items = [
  {
    title: "All Notes",
    icon: "/images/icon-home.svg",
    path: "/",
  },
  {
    title: "Archived Notes",
    icon: "/images/icon-archive.svg",
    path: "/archives",
  },
];

export const AppMenu = () => {
  const pathname = usePathname();
  return (
    <SidebarMenu>
      {items.map((item) => {
        const isActive = pathname === item.path;
        return (
          <SidebarMenuItem
            key={item.title}
            className={cn(isActive && "rounded-lg bg-neutral-100")}
          >
            <SidebarMenuButton asChild>
              <div className="flex items-center justify-between">
                <Link href={item.path}>
                  <span
                    className={cn(
                      "text-preset-4 text-neutral-700",
                      isActive && "text-neutral-950",
                    )}
                  >
                    {item.title}
                  </span>
                </Link>
                {isActive && (
                  <Image
                    src={"/images/icon-chevron-right.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                )}
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
};
