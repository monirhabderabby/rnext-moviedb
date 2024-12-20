"use client"; // Error boundaries must be Client Components

import { AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    // <div className="min-h-screen flex flex-col justify-center items-center">
    //   <h2>{error?.message || "Something went wrong!"}</h2>
    //   <button
    //     onClick={
    //       // Attempt to recover by trying to re-render the segment
    //       () => reset()
    //     }
    //   >
    //     Try again
    //   </button>
    // </div>

    <div className="min-h-screen flex justify-center items-center ">
      <div
        id="emptyState"
        className=" text- flex flex-col justify-center items-center gap-y-4"
      >
        <AlertCircle className="h-7 w-7 text-red-500" />
        <h2 className="text-2xl font-bold text-light mb-2">
          {" "}
          {error?.message || "Something went wrong!"}
        </h2>
        <button
          onClick={() => reset()}
          className="bg-primary text-dark px-6 py-2 rounded-full hover:bg-primary/80 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
