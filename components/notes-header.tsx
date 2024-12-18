import { SearchForm } from "./search-form";

export const NotesHeader = () => {
  return (
    <header className="flex w-full items-center justify-between border-b border-neutral-200 px-8 py-[18.5px]">
      <h1 className="text-preset-1">All Notes</h1>
      <SearchForm />
    </header>
  );
};
