import MovieCard from "@/components/cards/movie-card";

const PopulerMovies = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 ">Popular on MOVIE DB</h2>
      <div id="popularMovies" className="flex space-x-4 overflow-x-auto pb-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
};

export default PopulerMovies;
