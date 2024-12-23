import { Skeleton } from "../ui/skeleton";

export const ShowNoteSkeleton = () => {
  return (
    <div className="flex flex-1">
      <div className="mb-14 grid flex-1 grid-rows-[auto,1fr,auto] border-neutral-200 lg:mb-0 lg:border-r">
        <div className="space-y-4 border-neutral-200 px-6 py-5 lg:border-b">
          <Skeleton className="h-8 w-full" />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex w-[115px] items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-6 flex-1" />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex w-[115px] items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex w-[115px] items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </div>
        <div className="self-stretch px-6 py-4">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="flex items-center gap-4 border-t border-neutral-200 px-6 py-5">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-20" />
        </div>
      </div>
      <div className="hidden w-64 space-y-3 px-4 py-5 lg:block">
        <Skeleton className="h-9 max-w-[258px]" />
        <Skeleton className="h-9 max-w-[258px]" />
      </div>
    </div>
  );
};
