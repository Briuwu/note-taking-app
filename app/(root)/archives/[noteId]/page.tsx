import { getNote } from "@/actions/notes";
import { ShowNote } from "./show-note";

type Props = {
  params: Promise<{ noteId: string }>;
};

export default async function ArchiveNotePage({ params }: Props) {
  const { noteId } = await params;
  const note = await getNote(Number(noteId));
  return <ShowNote note={note} />;
}
