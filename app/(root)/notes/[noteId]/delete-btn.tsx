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
  onDeleteBtn: () => void;
  isPending: boolean;
  className?: string;
};

export const DeleteBtn = ({ onDeleteBtn, isPending, className }: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={cn("w-full justify-start", className)}
          variant="outline"
        >
          <Image
            src={"/images/icon-delete.svg"}
            alt=""
            width={24}
            height={24}
          />
          <span className="text-preset-4 hidden text-neutral-950 lg:block">
            Delete Note
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="space-y-0">
        <div className="grid grid-cols-[auto,1fr] items-start gap-4">
          <div className="rounded-lg bg-neutral-100 p-2">
            <Image
              src={"/images/icon-delete.svg"}
              alt=""
              width={24}
              height={24}
            />
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Note</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to permanently delete this note? This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-neutral-100" disabled={isPending}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onDeleteBtn}
            disabled={isPending}
            className="bg-red-500"
          >
            Delete Note
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
