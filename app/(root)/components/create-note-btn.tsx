"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
};

export const CreateNoteBtn = ({ className }: Props) => {
  const mobile = useIsMobile();
  return (
    <Button
      className={cn(
        "text-preset-4 fixed bottom-[80px] right-4 h-16 w-16 rounded-full bg-blue-500 lg:static lg:mb-4 lg:h-auto lg:w-full",
        className,
      )}
      asChild
    >
      <Link href="/notes/create">
        {mobile ? (
          <div>
            <Image
              src={"/images/icon-plus.svg"}
              alt=""
              width={24}
              height={24}
            />
          </div>
        ) : (
          <span className="text-neutral-0">+ Create New Note</span>
        )}
      </Link>
    </Button>
  );
};
