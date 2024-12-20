import { removeWatchlist } from "@/actions/watchlist";
import { getFullImageSrc } from "@/lib/imagePathGenerate";
import { getSingleMovie } from "@/lib/queries";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const WatchListCard = ({ movieId, userId, onRemove }) => {
  const [data, setData] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const res = await getSingleMovie(movieId);
      setData(res);
    };

    if (movieId) {
      getData();
    }
  }, [movieId]);

  if (!data) {
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-pulse relative h-72">
        <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-200 rounded w-10"></div>
            <div className="h-6 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </div>
    );
  }

  const { poster_path, id, release_date, title } = data || {};
  const src = getFullImageSrc(poster_path);
  const date = new Date(release_date);

  const handleRemove = async (e) => {
    e.stopPropagation();
    const deletePromise = removeWatchlist({ userId, movieId });

    toast.promise(deletePromise, {
      loading: "Removing...",
      success: (data) => {
        if (data) {
          onRemove(id);
          // setData(null);
          router.refresh();
          return "Removed";
        }
      },
      error: (error) => {
        return error?.message;
      },
    });
  };
  return (
    <div className="bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative">
      <Image
        src={src}
        width={400}
        height={450}
        alt="Armor"
        className="w-full h-[450px] object-cover"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h2 className="text-xl font-bold text-light mb-2">{title}</h2>
        <div className="flex justify-between items-center">
          <span className="text-primary">{date.getFullYear()}</span>
          <button
            className="bg-moviedb-red text-light px-3 py-1 rounded-full hover:bg-moviedb-red/80 transition"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchListCard;
