"use client";
import WatchListCard from "@/components/cards/watchlist-card";
import { useAuth } from "@/hooks/useAuth";
import { getWatchlist } from "@/lib/queries";
import { Suspense, useEffect, useState } from "react";

const WatchlistContainer = () => {
  const [watchLists, setWatchlists] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const getData = async () => {
      const data = await getWatchlist(auth?._id);
      setWatchlists(data);
    };

    if (auth?._id) {
      getData();
    }
  }, [auth]);

  const handleRemove = (id) => {
    const updatedWatchlists = watchLists.filter((item) => item.movieId != id);

    setWatchlists(updatedWatchlists);
  };

  return (
    <div className="container mx-auto pt-24 pb-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white">Watch Later</h1>
        <p className="text-light/70 mt-2">
          Movies you&apos;ve saved to watch in the future
        </p>
      </header>

      <div
        id="watchLaterList"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {/* <!-- Ms */}
        {watchLists.map(({ movieId, userId }) => (
          <Suspense fallback={<>Loading...</>} key={movieId}>
            <WatchListCard
              movieId={movieId}
              userId={userId}
              onRemove={handleRemove}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default WatchlistContainer;
