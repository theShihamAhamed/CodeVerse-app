"use client";

import React from "react";

const QuestionFormLoading = () => {
  return (
    <div className="flex flex-col gap-6 w-full animate-pulse">
      {/* Page Title */}
      <div className="h-10 w-64 rounded bg-gray-300 dark:bg-gray-700"></div>

      {/* Form Skeleton */}
      <div className="flex flex-col gap-8 mt-6">
        {/* Question Title Input */}
        <div className="flex flex-col gap-2">
          <div className="h-5 w-32 rounded bg-gray-300 dark:bg-gray-700"></div>
          <div className="h-14 w-full max-w-3xl rounded bg-gray-300 dark:bg-gray-700"></div>
        </div>

        {/* Content Editor */}
        <div className="flex flex-col gap-2">
          <div className="h-5 w-48 rounded bg-gray-300 dark:bg-gray-700"></div>
          <div className="h-40 w-full max-w-4xl rounded bg-gray-300 dark:bg-gray-700"></div>
        </div>

        {/* Tags Input */}
        <div className="flex flex-col gap-2">
          <div className="h-5 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
          <div className="h-14 w-full max-w-3xl rounded bg-gray-300 dark:bg-gray-700"></div>
          <div className="flex gap-2 mt-2">
            <div className="h-6 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
            <div className="h-6 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
            <div className="h-6 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="h-10 w-40 rounded bg-gray-300 dark:bg-gray-700 self-end mt-6"></div>
      </div>
    </div>
  );
};

export default QuestionFormLoading;
