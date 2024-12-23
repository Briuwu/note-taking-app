"use client";
import { ArchiveBtn } from "./archive-btn";
import { DeleteBtn } from "./delete-btn";

type Props = {
  onDeleteBtn: () => void;
  onArchiveBtn: () => void;
  isPending: boolean;
};

export const ShowNoteOptions = ({
  onDeleteBtn,
  onArchiveBtn,
  isPending,
}: Props) => {
  return (
    <div className="hidden max-w-[258px] space-y-3 px-4 py-5 lg:block">
      <ArchiveBtn onArchiveBtn={onArchiveBtn} isPending={isPending} />
      <DeleteBtn onDeleteBtn={onDeleteBtn} isPending={isPending} />
    </div>
  );
};
