"use client";
import { useParams, useSearchParams } from "next/navigation";
import { NotesWithTags } from "@/types";
import { format } from "date-fns";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  notes: NotesWithTags[];
};

export const AllNotes = ({ notes }: Props) => {
  const searchParams = useSearchParams();
  const activeTag = searchParams.get("tag");
  const query = searchParams.get("query");
  const params = useParams();

  const filteredNotes = notes.filter((note) => {
    if (!activeTag && !query) {
      return true;
    }

    if (activeTag && !query) {
      return note.tags.some(
        (tag) => tag.name.toLowerCase() === activeTag.toLowerCase(),
      );
    }

    if (!activeTag && query) {
      const title = note.title.toLowerCase().includes(query.toLowerCase());
      if (title) {
        return true;
      }

      const content = note.content.toLowerCase().includes(query.toLowerCase());
      if (content) {
        return true;
      }

      const tag = note.tags.some((tag) =>
        tag.name.toLowerCase().includes(query.toLowerCase()),
      );
      if (tag) {
        return true;
      }
    }

    return false;
  });

  return (
    <div className="divide-y divide-neutral-200">
      {filteredNotes.map((note) => {
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
