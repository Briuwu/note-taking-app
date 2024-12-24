"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const SettingsNav = () => {
  const pathname = usePathname();

  const items = [
    {
      name: "Color Theme",
      href: "/settings/color-theme",
      icon: "/images/icon-sun.svg",
      active: pathname === "/settings/color-theme",
    },
    {
      name: "Font Theme",
      href: "/settings/font-theme",
      icon: "/images/icon-font.svg",
      active: pathname === "/settings/font-theme",
    },
  ];
  return (
    <div className="px-4 py-6 md:px-8 lg:w-[258px] lg:px-4 lg:py-5">
      <ul>
        {items.map((item) => (
          <li
            key={item.href}
            className={cn("p-2", item.active && "bg-neutral-100")}
          >
            <Link href={item.href} className="flex items-center gap-2">
              <Image
                src={item.icon}
                alt=""
                width={24}
                height={24}
                className="h-5 w-5"
              />
              <span className="text-preset-4 text-neutral-950">
                {item.name}
              </span>
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
          </li>
        ))}
      </ul>
      <Separator className="my-2 bg-neutral-200" />
      <SignOutButton>
        <Button variant="ghost" className="w-full items-start justify-start">
          <Image
            src={"/images/icon-logout.svg"}
            alt=""
            width={24}
            height={24}
            className="h-5 w-5"
          />
          <span className="text-preset-4 text-neutral-950">Logout</span>
        </Button>
      </SignOutButton>
    </div>
  );
};
