import MovieCard from "@/components/cards/movie-card";

const PopulerMovies = async () => {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/movies/populer`;
  const populerMoviesRes = await fetch(url, {
    cache: "no-store",
  });

  const populerMoviesData = await populerMoviesRes.json();
  const populerMovies = populerMoviesData?.data;

  if (!populerMoviesRes.ok) {
    throw new Error(populerMoviesData?.message);
  }
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 ">Popular on MOVIE DB</h2>
      <div id="popularMovies" className="flex space-x-4 overflow-x-auto pb-4">
        {populerMovies.map((movie) => (
          <MovieCard key={movie.id} isTextRender={false} data={movie} />
        ))}
      </div>
    </section>
  );
};

export default PopulerMovies;
