import SimilerMoviesSkeleton from "@/components/skeleton/similer-movies-skeleton";
import { getSingleMovie } from "@/lib/queries";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import MovieDetails from "./_components/movie-details";
import SimilerMovies from "./_components/similer-movies";

const Page = async ({ params }) => {
  const movieId = params.id;

  if (!movieId) {
    throw new Error("Movie ID not provided");
  }

  const movieDetails = await getSingleMovie(movieId);

  if (!movieDetails) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails data={movieDetails} />

      <Suspense fallback={<SimilerMoviesSkeleton />}>
        <SimilerMovies movieId={movieId} />
      </Suspense>
    </div>
  );
};

export default Page;
