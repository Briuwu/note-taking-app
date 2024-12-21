import { CreateNoteBtn } from "@/components/create-note-btn";
import { Notes } from "@/components/notes";

function NotesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-full w-full">
      <Notes />
      <CreateNoteBtn className="fixed bottom-[85px] right-8 h-16 w-16 rounded-full text-3xl lg:hidden" />
      <div className="flex-1 border-neutral-200 px-6 py-5 lg:mr-[258px] lg:border-r">
        {children}
      </div>
    </div>
  );
}
export default NotesLayout;
