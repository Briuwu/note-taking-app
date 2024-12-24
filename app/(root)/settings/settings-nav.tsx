"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#0E121B"
            className="dark:stroke-white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m12.728 0-.97-.97M6.66 6.606l-.97-.97"
          />
          <path
            stroke="#0E121B"
            className="dark:stroke-white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12.055 7.805a4.195 4.195 0 1 1 0 8.39 4.195 4.195 0 0 1 0-8.39Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      active: pathname === "/settings/color-theme",
    },
    {
      name: "Font Theme",
      href: "/settings/font-theme",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#0E121B"
            className="dark:fill-white"
            fillRule="evenodd"
            d="M20.999 10.979H14.63a1 1 0 0 0-1 1v1.13a1 1 0 1 0 2 0v-.13h1.154v4.409h-.39a1 1 0 1 0 0 2h2.84a1 1 0 1 0 0-2h-.45v-4.41h1.214v.13a1 1 0 1 0 2 0v-1.13a1 1 0 0 0-1-1Z"
            clipRule="evenodd"
          />
          <path
            fill="#0E121B"
            className="dark:fill-white"
            fillRule="evenodd"
            d="M12.185 17.388H10.29V6.61h4.415v1.25a1 1 0 0 0 2 0V5.61a1 1 0 0 0-1-1H2.999a1 1 0 0 0-1 1v2.25a1 1 0 0 0 2 0V6.61H8.29v10.78H6.517a1 1 0 1 0 0 2h5.668a1 1 0 1 0 0-2Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      active: pathname === "/settings/font-theme",
    },
  ];
  return (
    <div className="px-4 py-6 md:px-8 lg:w-[258px] lg:px-4 lg:py-5">
      <ul>
        {items.map((item) => (
          <li
            key={item.href}
            className={cn(
              "p-2",
              item.active && "bg-neutral-100 dark:bg-neutral-800",
            )}
          >
            <Link href={item.href} className="flex items-center gap-2">
              {item.icon}
              <span className="text-preset-4 text-neutral-950 dark:text-white">
                {item.name}
              </span>
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
          </li>
        ))}
      </ul>
      <Separator className="my-2 bg-neutral-200" />
      <SignOutButton>
        <Button variant="ghost" className="w-full items-start justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#0E121B"
              className="dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M21 11.998H8.945m12.055 0-2.932-2.934M21 11.998l-2.932 2.936M14.556 8.266V7.251c0-1.56-1.121-2.891-2.651-3.15L6.702 3.046C4.765 2.718 3 4.219 3 6.195v11.61c0 1.976 1.765 3.477 3.702 3.15l5.203-1.057a3.188 3.188 0 0 0 2.65-3.149v-1.014"
            />
          </svg>
          <span className="text-preset-4 text-neutral-950 dark:text-white">
            Logout
          </span>
        </Button>
      </SignOutButton>
    </div>
  );
};
