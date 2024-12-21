import { CreateNoteForm } from "./create-note-form";

export const Note = () => {
  return (
    <div className="flex-1 border-r border-neutral-200 px-6 py-5">
      <CreateNoteForm />
      {/* <ShowNote /> */}
    </div>
  );
};
