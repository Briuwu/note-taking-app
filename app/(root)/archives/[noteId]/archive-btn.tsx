import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  onUnarchiveBtn: () => void;
  isPending: boolean;
  className?: string;
};

export const UnarchiveBtn = ({
  onUnarchiveBtn,
  isPending,
  className,
}: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={cn("w-full justify-start", className)}
          variant="outline"
        >
          <Image
            src={"/images/icon-archive.svg"}
            alt=""
            width={24}
            height={24}
          />
          <span className="text-preset-4 hidden text-neutral-950 lg:block">
            Unarchive Note
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="space-y-0">
        <div className="grid grid-cols-[auto,1fr] items-start gap-4">
          <div className="rounded-lg bg-neutral-100 p-2">
            <Image
              src={"/images/icon-archive.svg"}
              alt=""
              width={24}
              height={24}
            />
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle>Unarchive Note</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to Unarchive this note? You can find it in
              the Unarchived Notes section and restore it anytime.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-neutral-100" disabled={isPending}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onUnarchiveBtn}
            disabled={isPending}
            className="bg-blue-500"
          >
            Unarchive Note
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};