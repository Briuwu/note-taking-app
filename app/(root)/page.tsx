import { CreateNoteBtn } from "@/components/create-note-btn";
import { Notes } from "@/components/notes";
import { NotesHeader } from "@/components/notes-header";

function Home() {
  return (
    <div className="flex h-full w-full">
      <NotesHeader />
      <Notes />
      <CreateNoteBtn className="fixed bottom-[85px] right-8 h-16 w-16 rounded-full text-3xl lg:hidden" />
    </div>
  );
}
export default Home;
