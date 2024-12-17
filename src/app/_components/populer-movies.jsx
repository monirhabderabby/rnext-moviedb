import MovieCard from "@/components/cards/movie-card";

const PopulerMovies = () => {
  return (
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-white">Popular on MOVIE DB</h2>
      <div id="popularMovies" class="flex space-x-4 overflow-x-auto pb-4">
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
