"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Form from "next/form";

export const SearchNotes = () => {
  const pathname = usePathname();

  const action = pathname === "/archives" ? "/archives" : "/";
  return (
    <Form action={action} className="relative">
      <Input
        type="text"
        name="query"
        placeholder="Search by title, content, or tags..."
        className="placeholder:text-preset-5 text-preset-5 px-4 py-3 pl-10 dark:placeholder:text-neutral-200 lg:w-[300px]"
      />
      <Button
        type="submit"
        className="absolute top-0"
        variant="ghost"
        size="icon"
      >
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
            d="M11.248 3.5a7.289 7.289 0 1 0 0 14.577 7.289 7.289 0 0 0 0-14.577ZM2.46 10.79a8.789 8.789 0 1 1 17.577 0 8.789 8.789 0 0 1-17.577 0Z"
            clipRule="evenodd"
          />
          <path
            fill="#0E121B"
            fillRule="evenodd"
            className="dark:fill-neutral-200"
            d="m16.736 15.648 5.616 5.6-1.06 1.063-5.615-5.601 1.06-1.062Z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Form>
  );
};
