import MovieCard from "@/components/cards/movie-card";

const SimilerMovies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">More Like This</h2>

      <div className="flex space-x-4 overflow-x-auto pb-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default SimilerMovies;