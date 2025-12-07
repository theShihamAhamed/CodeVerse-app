import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      {/* Page Header */}
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Skeleton className="h-[46px] w-40 rounded-xl" />
      </section>

      {/* Search + Filter Row */}
      <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <Skeleton className="h-14 flex-1 rounded-xl" />
        <Skeleton className="hidden max-md:flex h-14 w-full sm:min-w-[170px] rounded-xl" />
      </section>

      {/* QuestionCard list skeleton */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className="rounded-[10px] p-9 sm:px-11 bg-light-800/50 dark:bg-dark-300/50"
          >
            {/* Title Row */}
            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-24 sm:hidden" />{" "}
              {/* timestamp mobile */}
              <Skeleton className="h-6 w-3/4" /> {/* title */}
            </div>

            {/* Tags */}
            <div className="mt-4 flex gap-2 flex-wrap">
              <Skeleton className="h-6 w-20 rounded-md" />
              <Skeleton className="h-6 w-16 rounded-md" />
              <Skeleton className="h-6 w-24 rounded-md" />
            </div>

            {/* Bottom Row */}
            <div className="flex-between mt-6 flex-wrap gap-5">
              {/* Author */}
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-28" /> {/* author name */}
                  <Skeleton className="h-3 w-16" /> {/* timestamp */}
                </div>
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-6">
                <Skeleton className="h-4 w-10" /> {/* votes */}
                <Skeleton className="h-4 w-10" /> {/* answers */}
                <Skeleton className="h-4 w-10" /> {/* views */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Loading;
