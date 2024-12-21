import { NotesWithTags } from "@/types";
import Link from "next/link";

type Props = {
  notes: NotesWithTags[];
};

export const AllNotes = async ({ notes }: Props) => {
  return (
    <div className="divide-y divide-neutral-200">
      {notes.map((note) => (
        <Link
          href={`/notes/${note.id}`}
          key={note.id}
          className="block space-y-3 p-2 hover:bg-neutral-50"
        >
          <p className="text-preset-3">{note.title}</p>
          <div className="flex flex-wrap items-center gap-1">
            {note.tags.map((tag) => (
              <span
                key={tag.id}
                className="text-preset-6 rounded bg-neutral-200 px-[6px] py-[2px]"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <p className="text-preset-6">
            {new Date(note.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </Link>
      ))}
    </div>
  );
};
