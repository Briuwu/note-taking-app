import { getNote } from "@/actions/notes";
import { MainHeader } from "../../components/main-header";
import { Notes } from "../../components/notes";
import { ShowNote } from "./show-note";

type Props = {
  params: Promise<{ noteId: string }>;
};

export default async function NotePage({ params }: Props) {
  const { noteId } = await params;
  const note = await getNote(Number(noteId));
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr]">
      <MainHeader />
      <div className="grid h-full grid-cols-[auto,1fr]">
        <Notes className="hidden lg:block" />
        <ShowNote note={note} />
      </div>
    </div>
  );
}
