import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      {/* ======= PROFILE HEADER ======= */}
      <section className="flex flex-col-reverse items-start justify-between sm:flex-row">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          {/* Avatar */}
          <Skeleton className="size-[140px] rounded-full" />

          <div className="mt-3 space-y-3">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-32" />

            {/* profile links */}
            <div className="mt-5 flex flex-wrap items-center gap-5">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-28" />
            </div>

            {/* Bio */}
            <Skeleton className="mt-8 h-4 w-80" />
          </div>
        </div>

        {/* Edit Button */}
        <Skeleton className="h-12 w-44" />
      </section>

      {/* ======= STATS SECTION ======= */}
      <section className="mt-5">
        <Skeleton className="h-6 w-40 mb-4" />

        <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
        </div>
      </section>

      {/* ======= TABS ======= */}
      <section className="mt-10">
        <div className="flex gap-2 mb-6">
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-20" />
        </div>

        {/* ======= TOP POSTS SKELETON ======= */}
        <div className="flex flex-col gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-[10px] p-9 sm:px-11 border border-dark-300/50 dark:border-light-300/50"
            >
              <Skeleton className="h-6 w-72 mb-4" />
              <div className="flex gap-2 mb-4">
                <Skeleton className="h-5 w-12" />
                <Skeleton className="h-5 w-10" />
                <Skeleton className="h-5 w-8" />
              </div>
              <div className="flex justify-between mt-4 flex-wrap gap-3">
                <Skeleton className="h-5 w-48" />
                <div className="flex gap-3">
                  <Skeleton className="h-5 w-10" />
                  <Skeleton className="h-5 w-12" />
                  <Skeleton className="h-5 w-14" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ======= ANSWERS SKELETON ======= */}
        <div className="mt-10 flex flex-col gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-[10px] px-7 py-9 sm:px-11 border border-dark-300/50 dark:border-light-300/50"
            >
              <Skeleton className="h-5 w-96 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Loading;
