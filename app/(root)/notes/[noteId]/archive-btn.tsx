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
import Image from "next/image";

type Props = {
  onArchiveBtn: () => void;
  isPending: boolean;
};

export const ArchiveBtn = ({ onArchiveBtn, isPending }: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full justify-start" variant="outline">
          <Image
            src={"/images/icon-archive.svg"}
            alt=""
            width={24}
            height={24}
          />
          <span className="text-preset-4 text-neutral-950">Archive Note</span>
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
            <AlertDialogTitle>Archive Note</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to archive this note? You can find it in the
              Archived Notes section and restore it anytime.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-neutral-100" disabled={isPending}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onArchiveBtn}
            disabled={isPending}
            className="bg-blue-500"
          >
            Archive Note
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};