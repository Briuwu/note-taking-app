"use client";
import { useTransition } from "react";
import { toast } from "sonner";

import { archiveNote, deleteNote } from "@/actions/notes";
import { ArchiveBtn } from "./archive-btn";
import { DeleteBtn } from "./delete-btn";

type Props = {
  noteId: number;
};

export const ShowNoteOptions = ({ noteId }: Props) => {
  const [isPending, startTransition] = useTransition();
  const handleArchiveBtn = () => {
    startTransition(async () => {
      await archiveNote(noteId);

      toast.success("Note archived successfully");
    });
  };

  const handleDeleteBtn = () => {
    startTransition(async () => {
      await deleteNote(noteId);

      toast.success("Note deleted successfully");
    });
  };

  return (
    <div className="hidden max-w-[258px] space-y-3 px-4 py-5 lg:block">
      <ArchiveBtn onArchiveBtn={handleArchiveBtn} isPending={isPending} />
      <DeleteBtn onDeleteBtn={handleDeleteBtn} isPending={isPending} />
    </div>
  );
};
