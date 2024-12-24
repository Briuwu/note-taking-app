"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Form from "next/form";
import Image from "next/image";

export const SearchNotes = () => {
  const pathname = usePathname();

  const action = pathname === "/archives" ? "/archives" : "/";
  return (
    <Form action={action} className="relative">
      <Input
        type="text"
        name="query"
        placeholder="Search by title, content, or tags..."
        className="placeholder:text-preset-5 text-preset-5 px-4 py-3 pl-10 lg:w-[300px]"
      />
      <Button
        type="submit"
        className="absolute top-0"
        variant="ghost"
        size="icon"
      >
        <Image src={"/images/icon-search.svg"} alt="" width={24} height={24} />
      </Button>
    </Form>
  );
};
