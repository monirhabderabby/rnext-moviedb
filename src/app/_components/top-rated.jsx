import MovieCard from "@/components/cards/movie-card";

const TopRated = () => {
  return (
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-white">Top Rated</h2>
      <div id="topRatedMovies" class="flex space-x-4 overflow-x-auto pb-4">
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
