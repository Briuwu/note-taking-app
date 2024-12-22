"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import Image from "next/image";
import { cn } from "@/lib/utils";

const items = [
  {
    name: "All Notes",
    href: "/",
    icon: "/images/icon-home.svg",
  },
  {
    name: "Archived Notes",
    href: "/archives",
    icon: "/images/icon-archive.svg",
  },
];

export const AppSidebarMenu = () => {
  const pathname = usePathname();
  return (
    <SidebarMenu>
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              className={cn(active && "bg-neutral-100")}
            >
              <Link href={item.href}>
                <Image src={item.icon} alt="" width={24} height={24} />
                <span>{item.name}</span>
                {active && (
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
