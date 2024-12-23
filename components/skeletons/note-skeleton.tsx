import { cn } from "@/lib/utils";

export function NoteSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-full border-r border-neutral-200 px-4 pt-5 md:px-8 lg:w-[290px]",
        className,
      )}
    >
      <div className="mb-4 h-10 w-full animate-pulse rounded-md bg-neutral-200" />
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="animate-pulse space-y-3 rounded-md p-2">
            <div className="h-5 w-3/4 rounded bg-neutral-200" />
            <div className="flex flex-wrap gap-1">
              {[...Array(3)].map((_, tagIndex) => (
                <div
                  key={tagIndex}
                  className="h-6 w-16 rounded bg-neutral-300"
                />
              ))}
            </div>
            <div className="h-4 w-1/2 rounded bg-neutral-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
