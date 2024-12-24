import { MainHeader } from "../components/main-header";
import { Notes } from "../components/notes";

export default function NotesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen lg:grid-rows-[auto,1fr]">
      <MainHeader isArchive />
      <div className="grid h-full lg:grid-cols-[auto,1fr]">
        <Notes className="hidden lg:block" isArchive />
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
}
