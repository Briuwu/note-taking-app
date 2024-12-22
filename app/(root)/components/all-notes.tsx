import { NotesWithTags } from "@/types";
import { format } from "date-fns";
import Link from "next/link";

type Props = {
  notes: NotesWithTags[];
};

export const AllNotes = ({ notes }: Props) => {
  return (
    <div className="divide-y divide-neutral-200">
      {notes.map((note) => {
        return (
          <Link
            href={`/notes/${note.id}`}
            key={note.id}
            className="block space-y-3 rounded-md p-2"
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
