"use client";
import { addToWatchlist, ifWatched } from "@/actions/watchlist";
import { Icons } from "@/components/ui/Icons";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const WatchlistButtons = ({ movieId }) => {
  const [watched, setWatched] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    const watchList = async () => {
      const watched = await ifWatched({ userId: auth?._id, movieId });

      if (watched) {
        setWatched(true);
      } else {
        setWatched(false);
      }
    };

    if (auth?._id) {
      watchList();
    }
  }, [auth]);

  const handleAdd = async () => {
    try {
      const res = await addToWatchlist({
        userId: auth?._id,
        movieId,
      });

      if (res) {
        setWatched(true);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to add to watchlist");
    }
  };
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-4">
        {!watched ? (
          <div className="text-center">
            <button
              className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg"
              onClick={handleAdd}
              disabled={typeof watched === null}
            >
              {Icons.bookmark}
              Add to Wacth List
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600">
              {Icons.checked}
              Added to Wacth List
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchlistButtons;
