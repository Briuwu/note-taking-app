import { CreateNoteBtn } from "./create-note-btn";

export const Notes = () => {
  return (
    <div className="fixed hidden h-full max-w-[290px] space-y-4 overflow-y-auto border-r border-neutral-200 px-4 py-5 lg:block">
      <CreateNoteBtn>Create New Note</CreateNoteBtn>
      <p className="text-preset-5 rounded-lg border border-neutral-200 bg-neutral-100 p-2">
        You don&apos;t have any notes yet. Start a new note to capture your
        thoughts and ideas.
      </p>
    </div>
  );
};
