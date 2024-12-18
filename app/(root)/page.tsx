import { CreateNoteBtn } from "@/components/create-note-btn";
import { Notes } from "@/components/notes";

function Home() {
  return (
    <div className="w-full">
      <Notes />
      <CreateNoteBtn className="fixed bottom-[85px] right-8 h-16 w-16 rounded-full text-3xl lg:hidden" />
    </div>
  );
}
export default Home;
