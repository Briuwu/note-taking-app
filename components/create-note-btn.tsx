import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const CreateNoteBtn = ({ className, children }: Props) => {
  return (
    <Button
      asChild
      className={cn("text-preset-4 w-full bg-blue-500 text-white", className)}
    >
      <Link href="/notes/create">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="M12 5a.75.75 0 0 1 .75.75V11H18a.75.75 0 0 1 0 1.5h-5.25v5.25a.75.75 0 0 1-1.5 0V12.5H6A.75.75 0 0 1 6 11h5.25V5.75A.75.75 0 0 1 12 5Z"
          />
        </svg>
        {children}
      </Link>
    </Button>
  );
};
