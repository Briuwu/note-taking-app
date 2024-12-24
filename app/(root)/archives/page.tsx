import { Notes } from "../components/notes";

export default function ArchivesPage() {
  return (
    <div className="grid min-h-screen lg:hidden">
      <Notes className="w-full" isArchive />
    </div>
  );
}
