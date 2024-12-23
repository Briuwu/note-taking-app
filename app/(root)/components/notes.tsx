import { getAllNotes } from "@/actions/notes";
import { AllNotes } from "./all-notes";
import { CreateNoteBtn } from "./create-note-btn";
import { cn } from "@/lib/utils";
import { NotesWithTags } from "@/types";

type Props = {
  className?: string;
  isArchive?: boolean;
};

export const Notes = async ({ className, isArchive }: Props) => {
  const notes = await getAllNotes();

  let filteredNotes: NotesWithTags[];

  if (isArchive) {
    filteredNotes = notes.filter((note) => note.is_archived);
  } else {
    filteredNotes = notes.filter((note) => !note.is_archived);
  }

  return (
    <div
      className={cn(
        "h-full border-r border-neutral-200 px-4 pt-5 md:px-8 lg:w-[290px]",
        className,
      )}
    >
      {!isArchive && <CreateNoteBtn />}
      {filteredNotes.length > 0 ? (
        <AllNotes notes={filteredNotes} isArchive={isArchive} />
      ) : (
        <p className="text-preset-5 rounded-lg bg-neutral-200 p-2 text-neutral-950">
          You don&amp;t have any notes yet. Start a new note to capture your
          thoughts and ideas.
        </p>
      )}
    </div>
  );
};
