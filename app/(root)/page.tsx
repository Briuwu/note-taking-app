import { getAllTags } from "@/actions/notes";
import { MainHeader } from "./components/main-header";
import { Notes } from "./components/notes";
import { Tags } from "./components/tags";
import { SearchNotes } from "./components/search-notes";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home(props: Props) {
  const searchParams = await props.searchParams;
  const tags = await getAllTags();

  const uniqueTags = Array.from(new Set(tags.map((tag) => tag.name)));

  const isTagEnabled = searchParams.tags !== undefined;
  const isSearchEnabled = searchParams.search !== undefined;

  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr]">
      <MainHeader />
      {isSearchEnabled && (
        <div className="block px-4 py-5 md:px-8 md:py-6 lg:hidden">
          <p className="text-preset-1 mb-4">Search</p>
          <SearchNotes />
        </div>
      )}
      {isTagEnabled ? (
        <div className="mt-2 block px-4 lg:hidden">
          <Tags tags={uniqueTags} />
        </div>
      ) : (
        <Notes />
      )}
    </div>
  );
}
