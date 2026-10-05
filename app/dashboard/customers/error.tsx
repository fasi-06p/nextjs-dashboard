'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">
        Something went wrong!
      </h2>

      <p className="text-gray-500">
        Failed to load customer data.
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
      >
        Try again
      </button>
    </main>
  );
}