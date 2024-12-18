import MovieCard from "@/components/cards/movie-card";

const TopRated = async () => {
  const topRatedMoviesRes = await fetch(
    "http://localhost:3000/api/movies/rated",
    {
      cache: "no-store",
    }
  );

  const topRatedMoviesData = await topRatedMoviesRes.json();
  const topRatedMovies = topRatedMoviesData?.data;

  if (!topRatedMoviesRes.ok) {
    throw new Error(topRatedMoviesData?.message);
  }
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 ">Top Rated</h2>
      <div id="topRatedMovies" className="flex space-x-4 overflow-x-auto pb-4">
        {topRatedMovies.map((movie) => (
          <MovieCard key={movie.id} isTextRender={false} data={movie} />
        ))}
      </div>
    </section>
  );
};

export default TopRated;
