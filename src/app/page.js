import Hero from "./_components/hero";
import PopulerMovies from "./_components/populer-movies";
import TopRated from "./_components/top-rated";
import TrendingNow from "./_components/trending-now";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="container mx-auto px-4 py-8">
        <TrendingNow />
        <PopulerMovies />
        <TopRated />
      </div>
    </div>
  );
}
