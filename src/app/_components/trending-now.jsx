import MovieCard from "@/components/cards/movie-card";

const TrendingNow = ({ data }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 ">Trending Now</h2>
      <div id="trendingMovies" className="flex space-x-4 overflow-x-auto pb-4">
        {data.map((movie) => (
          <MovieCard isTextRender={true} key={movie.id} data={movie} />
        ))}
      </div>
    </section>
  );
};

export default TrendingNow;
