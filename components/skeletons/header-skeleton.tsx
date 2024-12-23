import { cn } from "@/lib/utils";

export function HeaderSkeleton({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "hidden items-center justify-between border-b border-neutral-200 px-8 py-[18.5px] lg:flex",
        className,
      )}
    >
      <div className="h-8 w-32 animate-pulse rounded-md bg-neutral-200" />
      <div className="flex items-center gap-4">
        <div className="h-10 w-64 animate-pulse rounded-md bg-neutral-200" />
        <div className="h-6 w-6 animate-pulse rounded-md bg-neutral-200" />
      </div>
    </header>
  );
}
