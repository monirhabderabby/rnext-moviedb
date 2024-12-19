import { getMoviesBySearch } from "@/lib/queries";
import { useEffect, useState } from "react";
import MovieSearchCard from "./movie-search-card";

const MovieSearchModal = ({ onMovieAdd, slotId, onClose }) => {
  const [term, setTerm] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  const getMovies = async () => {
    const movies = await getMoviesBySearch(term ?? undefined);

    if (movies.data.length !== 0) {
      setMoviesList(movies.data);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [term]);

  // Fetch movies when the debounced term changes
  useEffect(() => {
    if (debouncedTerm) {
      getMovies();
    }
  }, [debouncedTerm]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 ">
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Search Movie</h2>
          <button className="text-gray-400 hover:text-white" onClick={onClose}>
            ✕
          </button>
        </div>
        <input
          type="text"
          placeholder="Type movie name..."
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <div className="max-h-96 overflow-y-auto">
          {moviesList.length > 0 &&
            moviesList.map((movie) => (
              <MovieSearchCard
                key={movie.id}
                data={movie}
                onSelect={(data) => {
                  onMovieAdd(slotId, data);
                  onClose();
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSearchModal;
