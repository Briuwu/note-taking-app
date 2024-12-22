"use client";
import { useParams } from "next/navigation";
import { NotesWithTags } from "@/types";
import { format } from "date-fns";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  notes: NotesWithTags[];
};

export const AllNotes = ({ notes }: Props) => {
  const params = useParams();
  return (
    <div className="divide-y divide-neutral-200">
      {notes.map((note) => {
        const active = params.noteId === note.id.toString();
        return (
          <Link
            href={`/notes/${note.id}`}
            key={note.id}
            className={cn(
              "block space-y-3 rounded-md p-2",
              active && "bg-neutral-100",
            )}
          >
            <p className="text-preset-3">{note.title}</p>
            <div className="flex flex-wrap gap-1">
              {note.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="text-preset-6 rounded bg-neutral-200 px-[6px] py-[2px] text-neutral-950"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <p className="text-preset-6 text-neutral-700">
              {format(new Date(note.createdAt), "dd MMM yyyy")}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
