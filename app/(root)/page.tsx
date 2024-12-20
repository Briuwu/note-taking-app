import { CreateNoteBtn } from "@/components/create-note-btn";
import { Note } from "@/components/note";
import { Notes } from "@/components/notes";

function Home() {
  return (
    <div className="flex h-full w-full">
      <Notes />
      <CreateNoteBtn className="fixed bottom-[85px] right-8 h-16 w-16 rounded-full text-3xl lg:hidden" />
      <Note />
      <div className="mr-8 w-[258px]" />
    </div>
  );
}
export default Home;
