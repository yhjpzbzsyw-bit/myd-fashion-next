"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-xl font-semibold text-red-600 mb-4">
        Oups, une erreur est survenue.
      </h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
      >
        Réessayer
      </button>
    </div>
  );
}