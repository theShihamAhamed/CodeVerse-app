"use client";

import React from "react";

const QuestionDetailsLoading = () => {
  return (
    <div className="animate-pulse flex flex-col gap-6 w-full">
      {/* Author Info */}
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-full bg-gray-300 dark:bg-gray-700" />
        <div className="h-4 w-32 rounded bg-gray-300 dark:bg-gray-700" />
      </div>

      {/* Question Title */}
      <div className="h-8 w-full max-w-3xl rounded bg-gray-300 dark:bg-gray-700" />

      {/* Metrics */}
      <div className="flex gap-4 mt-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-6 w-20 rounded bg-gray-300 dark:bg-gray-700"
          />
        ))}
      </div>

      {/* Content */}
      <div className="h-90 w-full max-w-4xl rounded bg-gray-300 dark:bg-gray-700 mt-4" />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-6 w-16 rounded bg-gray-300 dark:bg-gray-700"
          />
        ))}
      </div>

      {/* All Answers Section */}
      <div className="mt-8 space-y-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="h-24 w-full rounded bg-gray-300 dark:bg-gray-700"
          />
        ))}
      </div>

      {/* Answer Form */}
      <div className="h-40 w-full rounded bg-gray-300 dark:bg-gray-700 mt-6" />
    </div>
  );
};

export default QuestionDetailsLoading;
