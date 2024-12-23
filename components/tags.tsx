"use client";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  tags: string[];
};

export const Tags = ({ tags }: Props) => {
  const searchParams = useSearchParams();
  const activeTag = searchParams.get("tag");

  return (
    <div className="text-preset-4">
      <p className="mb-2">Tags</p>
      <ul className="space-y-1">
        {tags.map((tag) => {
          const active = tag === activeTag;
          return (
            <li key={tag} className={cn("p-3", active && "bg-neutral-100")}>
              <Link href={`/?tag=${tag}`} className="flex items-center gap-2">
                <Image
                  src={"/images/icon-tag.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="h-5 w-5"
                />
                <span className="text-preset-4 text-neutral-700">{tag}</span>
                <Image
                  src={"/images/icon-chevron-right.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="ml-auto"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
