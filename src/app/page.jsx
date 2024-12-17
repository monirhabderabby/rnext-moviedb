import Hero from "./_components/hero";
import PopulerMovies from "./_components/populer-movies";
import TopRated from "./_components/top-rated";
import TrendingNow from "./_components/trending-now";

export default async function Home() {
  const trendingMoviesRes = await fetch("http://localhost:3000/api/trending", {
    cache: "no-store",
  });

  const trendingMoviesData = await trendingMoviesRes.json();
  const trendingMovies = trendingMoviesData?.data;

  if (!trendingMoviesRes.ok) {
    throw new Error(trendingMoviesData?.message);
  }

  return (
    <div>
      <Hero data={trendingMovies[0]} />

      <div className="container mx-auto px-4 py-8">
        <TrendingNow data={trendingMovies.slice(1)} />
        <PopulerMovies />
        <TopRated />
      </div>
    </div>
  );
}
