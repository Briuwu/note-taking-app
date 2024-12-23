"use client";
import { UnarchiveBtn } from "./archive-btn";
import { DeleteBtn } from "./delete-btn";

type Props = {
  onDeleteBtn: () => void;
  onUnarchiveBtn: () => void;
  isPending: boolean;
};

export const ShowNoteOptions = ({
  onDeleteBtn,
  onUnarchiveBtn,
  isPending,
}: Props) => {
  return (
    <div className="hidden max-w-[258px] space-y-3 px-4 py-5 lg:block">
      <UnarchiveBtn onUnarchiveBtn={onUnarchiveBtn} isPending={isPending} />
      <DeleteBtn onDeleteBtn={onDeleteBtn} isPending={isPending} />
    </div>
  );
};
