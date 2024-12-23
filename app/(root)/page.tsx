import { MainHeader } from "./components/main-header";
import { Notes } from "./components/notes";

export const revalidate = 0;

export default async function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr]">
      <MainHeader />
      <Notes />
    </div>
  );
}
