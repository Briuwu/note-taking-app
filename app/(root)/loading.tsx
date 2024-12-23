import { HeaderSkeleton } from "@/components/skeletons/header-skeleton";
import { NoteSkeleton } from "@/components/skeletons/note-skeleton";

export default function Loading() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr]">
      <HeaderSkeleton />
      <NoteSkeleton />
    </div>
  );
}
