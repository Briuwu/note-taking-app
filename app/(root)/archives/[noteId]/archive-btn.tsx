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
          className={cn(
            "w-full justify-start bg-transparent dark:border-neutral-600",
            className,
          )}
          variant="outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#0E121B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="dark:stroke-neutral-200"
              d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
            />
            <path
              stroke="#0E121B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="dark:stroke-neutral-200"
              d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
            />
          </svg>
          <span className="text-preset-4 hidden text-neutral-950 dark:text-white lg:block">
            Unarchive Note
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="space-y-0">
        <div className="grid grid-cols-[auto,1fr] items-start gap-4">
          <div className="rounded-lg bg-neutral-100 p-2 dark:bg-neutral-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#0E121B"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="dark:stroke-neutral-200"
                d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
              />
              <path
                stroke="#0E121B"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="dark:stroke-neutral-200"
                d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
              />
            </svg>
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
          <AlertDialogCancel
            className="bg-neutral-100 dark:text-neutral-950"
            disabled={isPending}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onUnarchiveBtn}
            disabled={isPending}
            className="bg-blue-500 dark:text-white"
          >
            Unarchive Note
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
