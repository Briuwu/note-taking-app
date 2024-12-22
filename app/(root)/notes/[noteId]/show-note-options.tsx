"use client";

import { archiveNote, deleteNote } from "@/actions/notes";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  noteId: number;
};

export const ShowNoteOptions = ({ noteId }: Props) => {
  return (
    <div className="hidden max-w-[258px] space-y-3 px-4 py-5 lg:block">
      <Button
        onClick={() => archiveNote(noteId)}
        className="w-full justify-start"
        variant="outline"
      >
        <Image src={"/images/icon-archive.svg"} alt="" width={24} height={24} />
        <span className="text-preset-4 text-neutral-950">Archive Note</span>
      </Button>
      <Button
        onClick={() => deleteNote(noteId)}
        className="w-full justify-start"
        variant="outline"
      >
        <Image src={"/images/icon-delete.svg"} alt="" width={24} height={24} />
        <span className="text-preset-4 text-neutral-950">Delete Note</span>
      </Button>
    </div>
  );
};
