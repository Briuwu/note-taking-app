import Link from "next/link";
import { SearchNotes } from "./search-notes";
import Image from "next/image";

type Props = {
  isArchive?: boolean;
  isSettings?: boolean;
};

export const MainHeader = ({ isArchive, isSettings }: Props) => {
  return (
    <header className="hidden items-center justify-between border-b border-neutral-200 px-8 py-[18.5px] lg:flex">
      <h1 className="text-preset-1">
        {isArchive ? "Archived Notes" : isSettings ? "Settings" : "All Notes"}
      </h1>
      <div className="flex items-center gap-4">
        <SearchNotes />
        <Link href="/settings">
          <Image
            src={"/images/icon-settings.svg"}
            alt=""
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  );
};
