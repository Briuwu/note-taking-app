import Link from "next/link";
import { SearchForm } from "./search-form";
import Image from "next/image";

export const NotesHeader = () => {
  return (
    <header>
      <div className="bg-neutral-100 px-4 py-3 md:px-8 md:py-6 lg:hidden">
        <Link href="/">
          <span className="sr-only">Logo</span>
          <Image src={"/images/logo.svg"} alt="" width={95} height={28} />
        </Link>
      </div>
      <div className="w-full md:px-8 lg:px-0">
        <div className="w-full items-center justify-between space-y-4 border-neutral-200 px-4 py-5 md:border-b lg:flex lg:space-y-0 lg:px-8 lg:py-[18.5px]">
          <h1 className="text-preset-1">All Notes</h1>
          <p className="text-preset-5 rounded-lg border border-neutral-200 bg-neutral-100 p-2 lg:hidden">
            You don&apos;t have any notes yet. Start a new note to capture your
            thoughts and ideas.
          </p>
          <SearchForm />
        </div>
      </div>
    </header>
  );
};
