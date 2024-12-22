import { getAllNotes } from "@/actions/notes";
import { AllNotes } from "./all-notes";
import { CreateNoteBtn } from "./create-note-btn";

export const Notes = async () => {
  const notes = await getAllNotes();
  return (
    <div className="border-r border-neutral-200 px-4 pt-5 md:px-8 lg:w-[290px]">
      <CreateNoteBtn />
      {notes.length > 0 ? (
        <AllNotes notes={notes} />
      ) : (
        <p className="text-preset-5 rounded-lg bg-neutral-200 p-2 text-neutral-950">
          You don&amp;t have any notes yet. Start a new note to capture your
          thoughts and ideas.
        </p>
      )}
    </div>
  );
};
