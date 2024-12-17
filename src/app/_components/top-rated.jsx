import MovieCard from "@/components/cards/movie-card";

const TopRated = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 ">Top Rated</h2>
      <div id="topRatedMovies" className="flex space-x-4 overflow-x-auto pb-4">
        <MovieCard />
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

export default TopRated;
