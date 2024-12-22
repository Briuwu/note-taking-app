"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  className?: string;
};

export const CreateNoteBtn = ({ className }: Props) => {
  const mobile = useIsMobile();
  return (
    <Button
      className={cn(
        "text-preset-4 absolute h-16 w-16 rounded-full bg-blue-500 lg:relative lg:h-auto lg:w-full",
        className,
      )}
    >
      {mobile ? (
        <div>
          <Image src={"/images/icon-plus.svg"} alt="" width={24} height={24} />
        </div>
      ) : (
        <span className="text-neutral-0">+ Create New Note</span>
      )}
    </Button>
  );
};
