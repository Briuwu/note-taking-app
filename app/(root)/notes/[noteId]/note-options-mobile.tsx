import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { DeleteBtn } from "./delete-btn";
import { ArchiveBtn } from "./archive-btn";

type Props = {
  onDeleteBtn: () => void;
  onArchiveBtn: () => void;
  isPending: boolean;
};

export default function NoteOptionsMobile({
  onArchiveBtn,
  onDeleteBtn,
  isPending,
}: Props) {
  return (
    <div className="block flex justify-between px-4 pt-5 lg:hidden">
      <Button asChild variant="link" className="h-auto p-0">
        <Link href=".." className="flex items-center gap-1">
          <Image
            src={"/images/icon-chevron-right.svg"}
            alt=""
            width={24}
            height={24}
            className="h-[18px] w-[18px] rotate-180 transform"
          />
          <span className="text-preset-5">Go Back</span>
        </Link>
      </Button>

      <div className="flex gap-2">
        <DeleteBtn onDeleteBtn={onDeleteBtn} isPending={isPending} />
        <ArchiveBtn onArchiveBtn={onArchiveBtn} isPending={isPending} />
      </div>
    </div>
  );
}