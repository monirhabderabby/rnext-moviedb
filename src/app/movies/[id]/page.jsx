import { getSingleMovie } from "@/lib/queries";
import MovieDetails from "./_components/movie-details";
import SimilerMovies from "./_components/similer-movies";

const Page = async ({ params }) => {
  const movieId = params.id;

  if (!movieId) {
    throw new Error("Movie ID not provided");
  }

  const movieDetails = await getSingleMovie(movieId);

  return (
    <div>
      <MovieDetails data={movieDetails} />
      <SimilerMovies movieId={movieId} />
    </div>
  );
};

export default Page;
