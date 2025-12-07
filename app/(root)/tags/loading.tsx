import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      {/* Page Title */}
      <h1 className="h1-bold text-dark100_light900 text-3xl">Tags</h1>

      {/* Search + Filter Row */}
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        {/* Search bar */}
        <Skeleton className="h-14 flex-1 rounded-xl" />
        {/* Filter dropdown */}
        <Skeleton className="h-14 w-full sm:min-w-[170px] rounded-xl" />
      </div>

      {/* Tag Cards Grid (match real layout) */}
      <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="background-light900_dark200 light-border flex flex-col rounded-2xl border px-8 py-10"
          >
            {/* Tag Header */}
            <div className="flex items-center justify-between gap-3">
              <Skeleton className="h-6 w-24 rounded-md" /> {/* tag name */}
              <Skeleton className="h-8 w-8 rounded-md" /> {/* icon */}
            </div>

            {/* Description */}
            <Skeleton className="mt-5 h-4 w-full rounded-md" />
            <Skeleton className="mt-2 h-4 w-5/6 rounded-md" />
            <Skeleton className="mt-2 h-4 w-4/6 rounded-md" />

            {/* Questions count */}
            <Skeleton className="mt-4 h-5 w-24 rounded-md" />
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="mt-10 flex justify-center">
        <Skeleton className="h-10 w-40 rounded-xl" />
      </div>
    </>
  );
};

export default Loading;
