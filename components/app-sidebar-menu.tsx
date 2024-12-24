"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { cn } from "@/lib/utils";

export const AppSidebarMenu = () => {
  const pathname = usePathname();
  const items = [
    {
      name: "All Notes",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#0E121B"
            fillRule="evenodd"
            className="dark:fill-neutral-200"
            d="M4.496 8.025a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.314h8.88a2.314 2.314 0 0 0 2.313-2.314V8.775a.75.75 0 0 1 1.5 0v8.675a3.814 3.814 0 0 1-3.814 3.814H7.56a3.814 3.814 0 0 1-3.814-3.814V8.775a.75.75 0 0 1 .75-.75Z"
            clip-rule="evenodd"
          />
          <path
            fill="#0E121B"
            fillRule="evenodd"
            className="dark:fill-neutral-200"
            d="M10.06 3.41a3.127 3.127 0 0 1 3.88 0l7.525 5.958a.75.75 0 1 1-.93 1.176l-7.526-5.957a1.628 1.628 0 0 0-2.018 0l-7.525 5.957a.75.75 0 1 1-.931-1.176L10.06 3.41Z"
            clip-rule="evenodd"
          />
          <path
            fill="#0E121B"
            fillRule="evenodd"
            className="dark:fill-neutral-200"
            d="M17.668 4.193a.75.75 0 0 1 .75.75v2.354a.75.75 0 0 1-1.5 0V4.943a.75.75 0 0 1 .75-.75ZM11.974 13.688h.055c.377 0 .702 0 .97.02.283.022.565.071.838.203a2.25 2.25 0 0 1 1.05 1.05c.131.272.18.554.202.837.02.268.02.593.02.97v3.746a.75.75 0 0 1-1.5 0v-3.718c0-.412 0-.678-.015-.881-.016-.195-.041-.268-.059-.303a.75.75 0 0 0-.35-.35c-.035-.017-.108-.043-.302-.058a12.747 12.747 0 0 0-.881-.017c-.412 0-.679.001-.881.017-.195.015-.268.04-.303.058a.75.75 0 0 0-.35.35c-.017.035-.043.108-.058.303-.016.203-.016.469-.016.88v3.72a.75.75 0 0 1-1.5 0v-3.747c0-.377 0-.702.02-.97.022-.283.071-.565.203-.838a2.25 2.25 0 0 1 1.05-1.05c.273-.131.554-.18.837-.202.268-.02.593-.02.97-.02Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      active: pathname === "/" || /^\/notes\/\d+$/.test(pathname),
    },
    {
      name: "Archived Notes",
      href: "/archives",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#0E121B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="dark:stroke-neutral-200"
            d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
          />
          <path
            stroke="#0E121B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            className="dark:stroke-neutral-200"
            d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
          />
        </svg>
      ),
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
              className={cn(
                item.active && "bg-neutral-100 dark:bg-neutral-800",
              )}
            >
              <Link href={item.href}>
                {item.icon}
                <span className="dark:text-neutral-200">{item.name}</span>
                {item.active && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="ml-auto dark:fill-white"
                  >
                    <path
                      fill="#000"
                      fillRule="evenodd"
                      className="dark:fill-white"
                      d="M9.47 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L12.94 12 9.47 8.53a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
};
