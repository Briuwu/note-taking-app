"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const AppSidebarMenu = () => {
  const pathname = usePathname();
  const items = [
    {
      name: "All Notes",
      href: "/",
      icon: "/images/icon-home.svg",
      active: pathname === "/" || /^\/notes\/\d+$/.test(pathname),
    },
    {
      name: "Archived Notes",
      href: "/archives",
      icon: "/images/icon-archive.svg",
      active: pathname === "/archives" || /^\/archives\/\d+$/.test(pathname),
    },
  ];
  return (
    <SidebarMenu>
      {items.map((item) => {
        return (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              className={cn(item.active && "bg-neutral-100")}
            >
              <Link href={item.href}>
                <Image src={item.icon} alt="" width={24} height={24} />
                <span>{item.name}</span>
                {item.active && (
                  <Image
                    src={"/images/icon-chevron-right.svg"}
                    alt=""
                    width={24}
                    height={24}
                    className="ml-auto"
                  />
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
};
