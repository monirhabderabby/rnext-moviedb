import { base64 } from "@/lib/base64";
import { getFullImageSrc } from "@/lib/imagePathGenerate";
import { getSingleMovie } from "@/lib/queries";
import Image from "next/image";
import { useEffect, useState } from "react";
import MovieSearchModal from "./movie-search-modal";

const SLot = ({ slot, onRemove, onMovieAdd }) => {
  // State to store additional movie information fetched from API
  const [additionalMovieInfo, setAdditionalMovieInfo] = useState(null);

  // Effect to fetch additional movie information when slot data changes
  useEffect(() => {
    const fetchAdditionalInfo = async () => {
      if (slot.data?.id) {
        const data = await getSingleMovie(slot.data.id);
        setAdditionalMovieInfo(data);
        console.log(data);
      }
    };
    fetchAdditionalInfo();
  }, [slot.data?.id]);

  // If no movie is selected, render an empty slot component
  if (!slot.data) {
    return (
      <EmptySlot onRemove={onRemove} slot={slot} onMovieAdd={onMovieAdd} />
    );
  }

  // Destructure movie data and additional information
  const { poster_path, title, vote_average, release_date } = slot.data || {};

  const src = getFullImageSrc(poster_path);
  const releaseDate = new Date(release_date);
  const { genres, revenue, runtime, budget } = additionalMovieInfo || {};

  return (
    <div class="bg-zinc-900 rounded-lg p-4 flex flex-col">
      <div class="flex justify-end mb-4">
        <button
          onClick={() => onRemove(slot.slotId)}
          class="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      <div class="grid grid-cols-5 gap-8">
        <div class="col-span-2 h-full">
          <Image
            src={src}
            alt={title}
            width={200}
            height={600}
            placeholder="blur"
            blurDataURL={base64}
            class="w-full rounded-lg mb-4 object-contain max-h-full"
          />
          <h2 class="text-xl font-bold mb-2 text-center">{title}</h2>
        </div>
        <div class="w-full space-y-4 col-span-3">
          <div class="bg-zinc-800 p-3 rounded">
            <span class="text-gray-400">Rating:</span>
            <span class="float-right">{vote_average.toFixed(1)}/10</span>
          </div>
          <div class="bg-zinc-800 p-3 rounded">
            <span class="text-gray-400">Release Year:</span>
            <span class="float-right">{releaseDate.getFullYear()}</span>
          </div>
          <div class="bg-zinc-800 p-3 rounded">
            <span class="text-gray-400">Runtime:</span>
            <span class="float-right">{runtime} min</span>
          </div>
          <div class="bg-zinc-800 p-3 rounded">
            <span class="text-gray-400">Budget:</span>
            <span class="float-right">${budget}</span>
          </div>
          <div class="bg-zinc-800 p-3 rounded">
            <span class="text-gray-400">Revenue:</span>
            <span class="float-right">${revenue}</span>
          </div>
          <div class="bg-zinc-800 p-3 rounded">
            <span class="text-gray-400">Genres:</span>
            <div class="mt-2 flex flex-wrap gap-2">
              {genres?.map((item) => (
                <span
                  class="bg-zinc-700 px-2 py-1 rounded-full text-sm"
                  key={item.id}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SLot;

// Component to render an empty slot placeholder
const EmptySlot = ({ onRemove, slot, onMovieAdd }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div class="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]">
        <div class="flex justify-end mb-4">
          <button
            class="text-gray-400 hover:text-white"
            onClick={() => onRemove(slot.slotId)}
          >
            ✕
          </button>
        </div>
        <div class="flex-grow flex flex-col items-center justify-center">
          <button
            class="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
            onClick={() => setOpen((p) => !p)}
          >
            Select Movie
          </button>
        </div>
      </div>
      {open && (
        <MovieSearchModal
          onMovieAdd={onMovieAdd}
          slotId={slot.slotId}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};