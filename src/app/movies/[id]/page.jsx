import MovieDetails from "./_components/movie-details";
import SimilerMovies from "./_components/similer-movies";

const Page = ({ params }) => {
  return (
    <div>
      <MovieDetails />
      <SimilerMovies />
    </div>
  );
};

export default Page;
